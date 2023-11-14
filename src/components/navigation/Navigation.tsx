'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { NavigationList } from './NavigationList';
import { Logo } from './Logo';
import { MobileNavigation } from './MobileNavigation';
import { MobileNavigationList } from './MobileNavigationList';
import { NavigationMenu } from './NavigationMenu';

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
        className={cn('bg-transparent w-full flex flex-col px-[5%] py-5  transition-colors', isScrolled && 'bg-white')}>
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
