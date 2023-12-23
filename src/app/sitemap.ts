import { getCityData } from 'utils/getCityData';

import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const stronyInternetowe = getCityData('strony-internetowe');
  const opiekaNadStronami = getCityData('opieka-nad-stronami-wordpress');
  const stronyEntries: MetadataRoute.Sitemap = stronyInternetowe.map(({ city }) => ({
    url: `https://oferty.onlinemasters.pl/strony-internetowe/${city}`,
  }));

  const opiekaEntries: MetadataRoute.Sitemap = opiekaNadStronami.map(({ city }) => ({
    url: `https://oferty.onlinemasters.pl/opieka-nad-stronami-wordpress/${city}`,
  }));

  return [...stronyEntries, ...opiekaEntries];
}
