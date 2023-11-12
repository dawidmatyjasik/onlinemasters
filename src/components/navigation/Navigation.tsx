"use client";

import { NavigationList } from "./NavigationList";
import { Logo } from "./Logo";
import { useState } from "react";
import { MobileNavigation } from "./MobileNavigation";
import { MobileNavigationList } from "./MobileNavigationList";

export const Navigation = () => {
  const [state, setState] = useState(true);

  return (
    <nav className="bg-white w-full flex flex-col px-[5%] py-5">
      <div className="flex">
        <Logo />
        <NavigationList state={state} />
        <MobileNavigation />
      </div>
      <MobileNavigationList />
    </nav>
  );
};
