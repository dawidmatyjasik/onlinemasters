import React from 'react';

import { ChevronDown } from 'lucide-react';

import { useTranslation } from 'app/i18n';
import { Container } from 'components/atoms/container/Container';
import { Text } from 'components/atoms/text/Text';
import { Button } from 'components/ui/button';

export const Hero = async () => {
  const { t } = await useTranslation('hero');
  return (
    <Container>
      <section className="flex ">
        <div className="flex flex-1 flex-col gap-4">
          <Text type="heading" as="h2" size="h6">
            {t('subTitle')}
          </Text>
          <Text as="h1" size="h1" type="heading">
            {t('title')}
          </Text>
          <Text>{t('description')}</Text>
          <div>
            <Button size="lg" iconStart={<ChevronDown />}>
              {t('cta')}
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
};
