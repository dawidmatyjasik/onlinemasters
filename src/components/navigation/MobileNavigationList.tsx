import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { Text } from "../ui/text";

export const MobileNavigationList = () => {
  const PRIMARY_MENU = [
    { title: "O nas", path: "/your-path" },
    { title: "Oferta", path: "/your-path" },
    { title: "Program Partnerski", path: "/your-path" },
    { title: "Portolio", path: "/your-path" },
    { title: "FAQ", path: "/your-path" },
    { title: "Kontakt", path: "/your-path" },
  ];

  return (
    <div className={cn("pb-3 mt-8 block md:hidden")}>
      <ul className="justify-center items-center">
        {PRIMARY_MENU.map((item, idx) => (
          <Text key={idx} as="li">
            <Link href={item.path}>{item.title}</Link>
          </Text>
        ))}
      </ul>
    </div>
  );
};
