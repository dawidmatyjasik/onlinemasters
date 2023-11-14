import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Text } from "../ui/text";
import { ChevronDown } from "lucide-react";

export const MobileNavigationList = () => {
  const [isSubExpanded, setIsSubExpanded] = useState(true);
  const SUB_MENU = [
    { title: "Strony internetowe", path: "/your-path" },
    { title: "Sklepy internetowe", path: "/your-path" },
    { title: "Opieka nad stroną WordPress", path: "/your-path" },
    { title: "Prowadzenie Social Media", path: "/your-path" },
    { title: "Pozycjonowanie Wizytówki Google", path: "/your-path" },
    { title: "Aplikacje Webowe", path: "/your-path" },
  ];

  const PRIMARY_MENU = [
    { title: "O nas", path: "/your-path" },
    { title: "Oferta", path: "/your-path", subMenu: SUB_MENU },
    { title: "Program Partnerski", path: "/your-path" },
    { title: "Portolio", path: "/your-path" },
    { title: "FAQ", path: "/your-path" },
    { title: "Kontakt", path: "/your-path" },
  ];

  return (
    <div className={cn("block md:hidden")}>
      <ul className="justify-center items-center">
        {PRIMARY_MENU.map(({ path, title, subMenu }) => (
          <>
            <Text
              key={title}
              as="li"
              className="py-4 bg-white border-[#E8E8E8] border-b flex flex-col"
            >
              <div className="flex justify-between items-center px-8">
                <Link href={path}>{title}</Link>
                {subMenu && (
                  <ChevronDown
                    className=""
                    onClick={() =>
                      setIsSubExpanded((isSubExpanded) => !isSubExpanded)
                    }
                  />
                )}
              </div>
              {isSubExpanded && (
                <ul className="justify-center items-center px-10">
                  {subMenu?.map(({ path, title }, idx) => (
                    <Text
                      key={idx}
                      as="li"
                      size="small"
                      className="py-3 px-2 bg-white flex justify-between items-center"
                    >
                      <Link href={path}>{title}</Link>
                    </Text>
                  ))}
                </ul>
              )}
            </Text>
          </>
        ))}
      </ul>
    </div>
  );
};
