import React from 'react';

import { Menu } from 'lucide-react';

import { useNavigation } from '@/context/NavigationProvider';

export function MobileNavigation() {
  const { setIsMobile } = useNavigation();
  return (
    <div className="md:hidden flex items-center ml-auto">
      <Menu onClick={() => setIsMobile((prevState) => !prevState)} />
    </div>
  );
}
