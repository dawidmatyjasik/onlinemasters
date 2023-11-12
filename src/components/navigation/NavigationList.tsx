"use client";
import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface MenuItemProps {
  href: string;
}

const MenuItem = ({
  href,
  children,
}: React.PropsWithChildren<MenuItemProps>) => (
  <NavigationMenuItem>
    <Link href={href} legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        {children}
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
);

interface NavigationListProps {
  state: boolean;
}

export const NavigationList = ({ state }: NavigationListProps) => (
  <NavigationMenu className="mx-auto md:flex hidden">
    <NavigationMenuList>
      <MenuItem href="#">O nas</MenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Oferta</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"></ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <MenuItem href="#">Program Partnerski</MenuItem>
      <MenuItem href="#">Portolio</MenuItem>
      <MenuItem href="#">FAQ</MenuItem>
      <MenuItem href="#">Kontakt</MenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
