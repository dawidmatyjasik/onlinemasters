"use client";

import { NavigationList } from "./NavigationList";
import { Logo } from "./Logo";
import { useEffect, useState } from "react";
import { MobileNavigation } from "./MobileNavigation";
import { MobileNavigationList } from "./MobileNavigationList";
import { cn } from "@/lib/utils";
import { NavigationMenu } from "./NavigationMenu";

export const Navigation = () => {
  const [state, setState] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
        className={cn(
          "bg-transparent w-full flex flex-col px-[5%] py-5 sticky top-0 transition-colors",
          isScrolled && "bg-white"
        )}
      >
        <div className="flex">
          <Logo />
          <NavigationList state={state} />
          <MobileNavigation />
        </div>
        <MobileNavigationList />
      </nav>
      <NavigationMenu />
    </header>
  );
};
