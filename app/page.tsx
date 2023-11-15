'use client';

import { Navigation } from 'components/organisms/navigation/Navigation';
import { NavigationProvider } from 'context/NavigationProvider';

const Home = () => (
  <main className="h-[300vh] bg-red-100">
    <NavigationProvider>
      <Navigation />
    </NavigationProvider>
  </main>
);

export default Home;
