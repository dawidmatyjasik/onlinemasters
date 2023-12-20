import { getCityData } from 'utils/getCityData';

import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const stronyInternetowe = await getCityData('strony-internetowe');
  const stronyEntries: MetadataRoute.Sitemap = stronyInternetowe.map(({ city }) => ({
    url: `https://oferty.onlinemasters.pl/strony-internetowe/${city}`,
  }));

  return [...stronyEntries];
}
