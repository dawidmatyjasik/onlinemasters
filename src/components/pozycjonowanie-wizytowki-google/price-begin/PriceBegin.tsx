import React from 'react';

import { ChevronRight } from 'lucide-react';

import { useTranslation } from 'app/i18n';
import { Container } from 'components/atoms/container/Container';
import { Link } from 'components/atoms/link/Link';
import { Text } from 'components/atoms/text/Text';
import { Button } from 'components/ui/button';

export const PriceBegin = async () => {
  const { t } = await useTranslation('priceBegin');
  return (
    <div
      className="flex min-h-[500px] w-full items-center justify-center bg-cover bg-fixed bg-no-repeat "
      style={{
        backgroundPosition: 'top center',
        backgroundImage: `url(/images/website/website_background_blue_colors_l.webp)`,
      }}>
      <div
        className="flex h-full min-h-[500px] w-full items-center justify-center"
        style={{
          backgroundColor: 'rgba(2, 24, 82, 0.7)',
        }}>
        <Container>
          <div className="flex flex-col gap-6 ">
            <Text color="white" className="text-center uppercase">
              Rewolucja
            </Text>
            <Text className="text-center text-[20px] md:text-[32px] 2xl:text-[40px]" color="white" as="h2">
              {t('title')}
            </Text>
            <Link href="https://onlinemasters.pl/bezplatna-obsluga-gmf" className="mx-auto w-fit [text-wrap:balance]">
              <Button size="lg" variant="secondary" className="mx-auto" iconStart={<ChevronRight />}>
                Zamawiam bezpłatny obsługę
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};
