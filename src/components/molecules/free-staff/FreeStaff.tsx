import React from 'react';

import { Container } from 'components/atoms/container/Container';
import { Link } from 'components/atoms/link/Link';
import { Text } from 'components/atoms/text/Text';
import { Button } from 'components/ui/button';

export const FreeStaff = () => (
  <div
    className="flex h-[500px] w-full items-center justify-center bg-cover bg-fixed bg-no-repeat"
    style={{
      backgroundPosition: 'top center',
      backgroundImage: `url(/strony-internetowe/free-staff/Widoki-na-onlinemasters.webp)`,
    }}>
    <Container>
      <div className="flex flex-col gap-4">
        <Text className="text-center" color="white" as="p">
          Dlaczego oferujemy bezpłatny projekt strony głównej? Ponieważ…
        </Text>
        <Text className="text-center" color="white" as="h2">
          Zależy nam, aby każdy klient był zadowolony z naszej pomocy
        </Text>
        <Text className="text-center" color="white" as="p">
          Z tego powodu, jeśli jest to możliwe, dajemy opcję przetestowania usług i podjęcia decyzji o ewentualnej
          współpracy po zapoznaniu się z naszą jakością i podejściem do działania.
        </Text>
        <Link href="https://onlinemasters.pl/bezplatny-projekt-strony" className="mx-auto w-fit">
          <Button size="lg" variant="secondary" className="mx-auto w-[400px]">
            Odbieram projekt
          </Button>
        </Link>
      </div>
    </Container>
  </div>
);
