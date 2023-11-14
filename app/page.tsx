'use client';

import { Navigation } from '@/components/navigation/Navigation';
import { NavigationProvider } from '@/context/NavigationProvider';

export default function Home() {
  return (
    <main className="h-[300vh] bg-red-100">
      <NavigationProvider>
        <Navigation />
      </NavigationProvider>
    </main>
  );
}
