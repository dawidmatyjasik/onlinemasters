import React from "react";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import { Link } from "../atoms/link/Link";

interface NavigationMenuContentProps {
  title: string;
  description: string;
  href: string;
}

export const NavigationMenuContent = ({
  title,
  description,
  href,
}: NavigationMenuContentProps) => {
  return (
    <div className="flex flex-col px-3 py-2">
      <Heading size="h5" as="h4" weight="medium">
        {title}
      </Heading>
      <Text size="small">{description}</Text>
      <Link href={href} className="flex items-center">
        Przejdź do oferty {">"}
      </Link>
    </div>
  );
};
