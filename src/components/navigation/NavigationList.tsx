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

const OfferMenu = () => {
  const { onHover, onLeave } = useNavigation();

  return (
    <NavigationMenuItem onMouseEnter={onHover} onMouseLeave={onLeave}>
      <Link href="#" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
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
        <MenuItem href="#">O nas</MenuItem>
        <OfferMenu />
        <MenuItem href="#">Program Partnerski</MenuItem>
        <MenuItem href="#">Portolio</MenuItem>
        <MenuItem href="#">FAQ</MenuItem>
        <MenuItem href="#">Kontakt</MenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
