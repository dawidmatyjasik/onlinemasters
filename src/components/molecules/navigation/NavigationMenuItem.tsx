import React from 'react';

import { Divider } from 'components/atoms/divider/Divider';
import { Heading } from 'components/atoms/heading/Heading';
import { NavigationMenuContent } from 'components/molecules/navigation/NavigationMenuContent';

import type { NavigationStructure } from 'components/molecules/navigation/NavigationMenu';

interface NavigationMenuItemProps {
  header: NavigationStructure['header'];
  subMenu: NavigationStructure['subMenu'];
}

export function NavigationMenuItem({ header, subMenu }: NavigationMenuItemProps) {
  return (
    <div className="flex flex-col gap-5 border-r border-[#DBDBDB] px-8 py-10">
      <Heading size="h3" as="h3">
        {header[0]}

        <br />

        {header[1]}
      </Heading>
      <Divider />
      {subMenu.map(({ title, description, href }) => (
        <NavigationMenuContent key={title} description={description} href={href} title={title} />
      ))}
    </div>
  );
}
