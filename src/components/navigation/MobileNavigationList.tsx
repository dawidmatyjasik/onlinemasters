import React, { useState } from 'react';

import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Text } from '../ui/text';

import { useNavigation } from '@/context/NavigationProvider';
import { cn } from '@/lib/utils';


interface MenuItem {
  title: string;
  path: string;
  subMenu?: MenuItem[];
}

const SUB_MENU: MenuItem[] = [
  {
    title: 'Strony internetowe',
    path: 'https://onlinemasters.pl/strony-internetowe',
  },
  {
    title: 'Sklepy internetowe',
    path: 'https://onlinemasters.pl/sklepy-internetowe',
  },
  {
    title: 'Opieka nad stroną WordPress',
    path: 'https://onlinemasters.pl/opieka-nad-strona-wordpress',
  },
  {
    title: 'Prowadzenie Social Media',
    path: 'https://onlinemasters.pl/prowadzenie-social-media',
  },
  {
    title: 'Pozycjonowanie Wizytówki Google',
    path: 'https://onlinemasters.pl/pozycjonowanie-wizytowki-google',
  },
  {
    title: 'Aplikacje Webowe',
    path: 'https://onlinemasters.pl/aplikacje-webowe',
  },
];

const PRIMARY_MENU: MenuItem[] = [
  { title: 'O nas', path: 'https://onlinemasters.pl/o-nas' },
  {
    title: 'Oferta',
    path: 'https://onlinemasters.pl/oferta',
    subMenu: SUB_MENU,
  },
  {
    title: 'Program Partnerski',
    path: 'https://onlinemasters.pl/program-partnerski',
  },
  { title: 'Portolio', path: 'https://onlinemasters.pl/portfolio' },
  { title: 'FAQ', path: 'https://onlinemasters.pl/faq' },
  { title: 'Kontakt', path: 'https://onlinemasters.pl/kontakt' },
];

export function MobileNavigationList() {
  const { isMobile } = useNavigation();
  const [isSubExpanded, setIsSubExpanded] = useState(true);
  const router = useRouter();

  const handleSubMenuToggle = () => {
    setIsSubExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <nav className={cn('block md:hidden', !isMobile && 'hidden')}>
      <ul className="justify-center items-center">
        {PRIMARY_MENU.map(({ path, title, subMenu }) => (
          <Text key={title} as="li" className="bg-white border-[#E8E8E8] border-b flex flex-col">
            <div className="flex justify-between items-center px-8 hover:bg-[#4175FC] [&:hover>*]:text-white py-4">
              <Text onClick={() => router.push(path)} className="flex-1" as="a">
                {title}
              </Text>
              {subMenu && <ChevronDown className="hover:text-white" onClick={handleSubMenuToggle} />}
            </div>
            {isSubExpanded && subMenu && (
              <ul className="justify-center items-center">
                {subMenu.map((sub) => (
                  <Text
                    key={sub.title}
                    as="li"
                    className="py-3 px-10 bg-white flex justify-between items-center hover:bg-[#4175FC] [&:hover>*]:text-white">
                    <Text onClick={() => router.push(path)} className="flex-1" as="a" size="small">
                      {sub.title}
                    </Text>
                  </Text>
                ))}
              </ul>
            )}
          </Text>
        ))}
      </ul>
    </nav>
  );
}
