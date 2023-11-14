import React from 'react';

import { Menu } from 'lucide-react';

import { useNavigation } from '@/context/NavigationProvider';

export function MobileNavigation() {
  const { setIsMobile } = useNavigation();
  return (
    <div className="ml-auto flex items-center md:hidden">
      <Menu onClick={() => setIsMobile((prevState) => !prevState)} />
    </div>
  );
}
