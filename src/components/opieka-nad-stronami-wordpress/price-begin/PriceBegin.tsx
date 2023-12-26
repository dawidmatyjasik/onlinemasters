import React from 'react';

import { ChevronRight } from 'lucide-react';

import { useTranslation } from 'app/i18n';
import { Container } from 'components/atoms/container/Container';
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
          <div className="flex flex-col gap-6">
            <Text className="text-center" color="white" as="h2">
              {t('title')}
            </Text>
            <a href="#cennik" className="mx-auto w-fit">
              <Button size="lg" variant="secondary" className="mx-auto" iconStart={<ChevronRight />}>
                Zobacz cennik
              </Button>
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
};
