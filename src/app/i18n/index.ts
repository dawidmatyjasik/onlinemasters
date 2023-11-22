import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';

type Services = 'strony-internetowe' | 'sklepy-internetowe';

const initI18next = async (service: Services, city: string) => {
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
    });
  return i18nInstance;
};

export const useTranslation = async (service: Services, city: string) => {
  const i18nextInstance = await initI18next(service, city);
  return {
    t: i18nextInstance.getFixedT(service, Array.isArray(city) ? city[0] : city),
    i18n: i18nextInstance,
  };
};
