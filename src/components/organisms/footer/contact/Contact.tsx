import React from 'react';

import { FacebookIcon, LinkedinIcon } from 'lucide-react';

import { Heading } from 'components/atoms/heading/Heading';
import { Link } from 'components/atoms/link/Link';

export const Contact = () => (
  <div className="flex flex-col justify-center gap-4 border-l border-[#494B41] px-4">
    <Heading size="h4" color="white">
      Kontakt
    </Heading>
    <div className="flex flex-col">
      <Link href="tel:+48575990730">+48 575 990 730</Link>
      <Link href="mailto:kontakt@onlinemasters.pl">kontakt@onlinemasters.pl</Link>
    </div>
    <div className="flex items-center gap-2">
      <FacebookIcon
        className="cursor-pointer text-[#4175FC] hover:text-[#084af3]"
        size={18}
        href="https://www.facebook.com/onlinemasterskatowice"
      />
      <LinkedinIcon
        className="cursor-pointer text-[#4175FC] hover:text-[#084af3]"
        size={18}
        href="https://www.linkedin.com/company/99959974/admin/feed/posts/?shareMsgArgs=null"
      />
    </div>
  </div>
);
