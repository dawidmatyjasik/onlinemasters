import React from "react";
import { NavigationMenuItem } from "./NavigationMenuItem";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/context/NavigationProvider";

export interface NavigationStructure {
  header: string[];
  subMenu: {
    title: string;
    description: string;
    href: string;
  }[];
}

const NAVIGATION_STRUCTURE: NavigationStructure[] = [
  {
    header: ["Strony i sklepy", "internetowe"],
    subMenu: [
      {
        title: "Strony internetowe",
        description: "Zyskaj pozytywny wizerunek i nowych klientów",
        href: "https://onlinemasters.pl/strony-internetowe/",
      },
      {
        title: "Sklepy internetowe",
        description: "Sprzedawaj skutecznie przez internet",
        href: "https://onlinemasters.pl/sklepy-internetowe/",
      },
      {
        title: "Opieka nad stroną",
        description: "Bądź spokojny o działanie swojej witryny",
        href: "https://onlinemasters.pl/opieka-nad-strona-wordpress/",
      },
    ],
  },
  {
    header: ["Social Media", "i Marketing"],
    subMenu: [
      {
        title: "Prowadzenie Social Media",
        description: "Zbuduj długotrwałą relację z odbiorcami",
        href: "https://onlinemasters.pl/prowadzenie-social-media/",
      },
      {
        title: "Pozycjonowanie Wizytówki Google",
        description: "Pozycjonowanie Wizytówki Google",
        href: "https://onlinemasters.pl/pozycjonowanie-wizytowki-google/",
      },
    ],
  },
  {
    header: ["Systemy", "Dedykowane"],
    subMenu: [
      {
        title: "Aplikacje webowe",
        description: "Zyskaj indywidualne rozwiązanie online",
        href: "https://onlinemasters.pl/aplikacje-webowe/",
      },
    ],
  },
];

export const NavigationMenu = () => {
  const { isHover, onHover, onLeave } = useNavigation();
  return (
    <nav
      className={cn(
        "bg-[#F2F5F5] w-full border-y border-[#DBDBDB] hidden",
        isHover && "block"
      )}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-3 grid-rows-1">
        {NAVIGATION_STRUCTURE.map(({ header, subMenu }) => (
          <NavigationMenuItem
            key={header[0]}
            header={header}
            subMenu={subMenu}
          />
        ))}
      </div>
    </nav>
  );
};
