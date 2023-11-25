import fs from 'fs';
import path from 'path';

type Service = 'strony-internetowe';

export const getCityData = (service: Service) => {
  const dataDir = path.join(process.cwd(), `src/app/i18n/locales/${service}`);

  const fileNames = fs
    .readdirSync(dataDir)
    .filter((fileName) => fileName.endsWith('.json'))
    .map((fileName) => fileName.replace('.json', ''));

  return fileNames.map((city) => ({ city }));
};
