/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

import { permanentRedirect } from 'next/navigation';

type Service = 'strony-internetowe' | 'opieka-nad-stronami-wordpress';

export const getCityData = async (service: Service) => {
  const dataDir = path.join(process.cwd(), `src/app/i18n/locales/${service}`);

  const readdir = promisify(fs.readdir);

  try {
    const fileNames = await readdir(dataDir);
    const filteredFileNames = fileNames
      .filter((fileName) => fileName.endsWith('.json'))
      .map((fileName) => fileName.replace('.json', ''));
    return filteredFileNames.map((city) => ({ city }));
  } catch (error) {
    console.error('Error reading directory:', error);
    return [];
  }
};

export const useRedirect = async (service: Service, city: string) => {
  const fileNames = await getCityData(service);

  if (!fileNames.some((file) => file.city === city)) {
    permanentRedirect('https://onlinemasters.pl/');
  }
};
