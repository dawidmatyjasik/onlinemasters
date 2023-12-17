import fs from 'fs';
import path from 'path';

import { permanentRedirect } from 'next/navigation';

type Service = 'strony-internetowe' | 'opieka-nad-stronami-wordpress';

export const getCityData = (service: Service) => {
  const dataDir = path.join(process.cwd(), `src/app/i18n/locales/${service}`);

  const fileNames = fs
    .readdirSync(dataDir)
    .filter((fileName) => fileName.endsWith('.json'))
    .map((fileName) => fileName.replace('.json', ''));

  return fileNames.map((city) => ({ city }));
};

export const useRedirect = (service: Service, city: string) => {
  const fileNames = getCityData(service);
  if (!fileNames.some((file) => file.city === city)) {
    permanentRedirect('https://onlinemasters.pl/');
  }
};
