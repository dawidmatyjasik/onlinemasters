import React, { PropsWithChildren } from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";
interface LinkProps {
  href: string;
  className?: string;
}

export const Link = ({
  href,
  className,
  children,
}: PropsWithChildren<LinkProps>) => {
  return (
    <NextLink
      href={href}
      className={cn(
        "font-medium font-body text-[#4175FC] hover:text-[#084af3]",
        className
      )}
    >
      {children}
    </NextLink>
  );
};
