'use client';

import { useEffect, useState } from 'react';

import { Logo } from 'components/organisms/navigation/Logo';
import { MobileNavigation } from 'components/organisms/navigation/MobileNavigation';
import { MobileNavigationList } from 'components/organisms/navigation/MobileNavigationList';
import { NavigationList } from 'components/organisms/navigation/NavigationList';
import { NavigationMenu } from 'components/organisms/navigation/NavigationMenu';
import { cn } from 'lib/utils';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn('fixed top-0 z-10 w-full')}>
      <nav
        className={cn('flex w-full flex-col bg-transparent px-[5%] py-5  transition-colors', isScrolled && 'bg-white')}>
        <div className="flex">
          <Logo />
          <NavigationList />
          <MobileNavigation />
        </div>
      </nav>
      <MobileNavigationList />
      <NavigationMenu />
    </header>
  );
}
