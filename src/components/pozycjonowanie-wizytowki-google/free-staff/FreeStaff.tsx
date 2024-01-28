import React from 'react';

import { Container } from 'components/atoms/container/Container';
import { Link } from 'components/atoms/link/Link';
import { Text } from 'components/atoms/text/Text';
import { Button } from 'components/ui/button';

export const FreeStaff = () => (
  <div
    className="hidden min-h-[500px] w-full items-center justify-center bg-cover bg-fixed bg-no-repeat lg:flex"
    style={{
      backgroundPosition: 'top center',
      backgroundImage: `url(/strony-internetowe/free-staff/darmowe-rzeczy.webp)`,
    }}>
    <div
      className="flex h-full min-h-[500px] w-full  items-center justify-center"
      style={{
        backgroundColor: 'rgba(2, 24, 82, 0.7)',
      }}>
      <Container>
        <div className="mx-auto flex h-full w-full flex-col items-center gap-4">
          <Text className="text-center" color="white" as="p">
            Dlaczego oferujemy aż 2 tygodnie bezpłatnej obsługi? Ponieważ…
          </Text>
          <Text className="text-center" color="white" as="h2">
            Zależy nam, aby każdy klient był maksymalnie zadowolony z naszej pomocy
          </Text>
          <Text className="text-center" color="white" as="p">
            Nie masz jeszcze wizytówki, a chcesz skorzystać z bezpłatnych 2 miesięcy prowadzenia? Zadzwoń lub wypełnij
            formularz, na pewno się dogadamy!
          </Text>
          <Link href="https://onlinemasters.pl/bezplatna-obsluga-gmf/" className="mx-auto w-fit">
            <Button size="lg" variant="secondary" className="mx-auto ">
              Zamawiam dwa tygodnie bezpłatnej obsługi Wizytówki Google
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  </div>
);
