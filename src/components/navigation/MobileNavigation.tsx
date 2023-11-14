import React from "react";
import { Menu } from "lucide-react";

export const MobileNavigation = () => {
  return (
    <div className="md:hidden flex items-center ml-auto">
      <Menu />
    </div>
  );
};
