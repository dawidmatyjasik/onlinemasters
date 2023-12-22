import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { headers } from 'next/headers';
import { initReactI18next } from 'react-i18next/initReactI18next';

const getTranslationParams = () => {
  const { get } = headers();
  const currentUrl = get('x-url');
  const parsedUrl = new URL(currentUrl!);
  const pathSegments = parsedUrl.pathname.split('/').filter(Boolean);
  const [service, city] = pathSegments;
  return [service, city];
};

const initI18next = async () => {
  const [service, city] = getTranslationParams();
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend(() => import(`./locales/${service}/${city}.json`)))
    .init({
      supportedLngs: ['pl'],
      lng: 'pl',
      fallbackLng: 'pl',
      defaultNS: city,
      ns: city,
      saveMissing: true,
      missingKeyHandler: (lng, ns, key, fallbackValue) => {
        console.log(lng, ns, key, fallbackValue);
      },
    });
  return i18nInstance;
};

export const useTranslation = async (keyPrefix?: string) => {
  const [service, city] = getTranslationParams();
  const i18nextInstance = await initI18next();
  return {
    t: i18nextInstance.getFixedT(service, Array.isArray(city) ? city[0] : city, keyPrefix),
    i18n: i18nextInstance,
  };
};
