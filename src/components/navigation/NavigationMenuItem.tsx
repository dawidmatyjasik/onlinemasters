import React from "react";
import { Heading } from "../ui/heading";
import { NavigationMenuContent } from "./NavigationMenuContent";
import { Divider } from "../atoms/divider/Divider";
import { NavigationStructure } from "./NavigationMenu";

interface NavigationMenuItemProps {
  header: NavigationStructure["header"];
  subMenu: NavigationStructure["subMenu"];
}

export const NavigationMenuItem = ({
  header,
  subMenu,
}: NavigationMenuItemProps) => {
  return (
    <div className="flex flex-col gap-5 py-10 px-8 border-r border-[#DBDBDB]">
      <Heading size="h3" as="h3">
        {header[0]} <br /> {header[1]}
      </Heading>
      <Divider />
      {subMenu.map(({ title, description, href }) => (
        <NavigationMenuContent
          key={title}
          description={description}
          href={href}
          title={title}
        />
      ))}
    </div>
  );
};
