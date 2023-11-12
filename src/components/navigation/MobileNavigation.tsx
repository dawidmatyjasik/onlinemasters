import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export const MobileNavigation = () => {
  const menus = [
    { title: "Home", path: "/your-path" },
    { title: "Blog", path: "/your-path" },
    { title: "About Us", path: "/your-path" },
    { title: "Contact Us", path: "/your-path" },
  ];
  return (
    <div className="md:hidden flex items-center ml-auto">
      <Button variant="ghost" size="icon">
        <Menu />
      </Button>
    </div>
  );
};
