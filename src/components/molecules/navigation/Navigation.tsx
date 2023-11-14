'use client';

import { useEffect, useState } from 'react';

import { Logo } from './Logo';
import { MobileNavigation } from './MobileNavigation';
import { MobileNavigationList } from './MobileNavigationList';
import { NavigationList } from './NavigationList';
import { NavigationMenu } from './NavigationMenu';

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
    <header className={cn('sticky top-0')}>
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