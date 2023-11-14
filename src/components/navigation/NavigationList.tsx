"use client";
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";
import { useNavigation } from "@/context/NavigationProvider";
import { cn } from "@/lib/utils";

interface MenuItemProps {
  href: string;
}

const MenuItem = ({
  href,
  children,
}: React.PropsWithChildren<MenuItemProps>) => (
  <NavigationMenuItem>
    <Link href={href} legacyBehavior passHref>
      <NavigationMenuLink
        className={cn(navigationMenuTriggerStyle(), "font-body")}
      >
        {children}
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
);

const OfferMenu = () => {
  const { onHover, onLeave } = useNavigation();

  return (
    <NavigationMenuItem onMouseEnter={onHover} onMouseLeave={onLeave}>
      <Link href="https://onlinemasters.pl/oferta/" legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(navigationMenuTriggerStyle(), "font-body")}
        >
          Oferta
          <ChevronDown size={16} />
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

export const NavigationList = () => {
  return (
    <NavigationMenu className="mx-auto md:flex hidden">
      <NavigationMenuList>
        <MenuItem href="https://onlinemasters.pl/o-nas/">O nas</MenuItem>
        <OfferMenu />
        <MenuItem href="https://onlinemasters.pl/program-partnerski/">
          Program Partnerski
        </MenuItem>
        <MenuItem href="https://onlinemasters.pl/portfolio/">
          Portfolio
        </MenuItem>
        <MenuItem href="https://onlinemasters.pl/faq/">FAQ</MenuItem>
        <MenuItem href="https://onlinemasters.pl/kontakt/">Kontakt</MenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
