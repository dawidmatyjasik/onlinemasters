'use client';

import { Footer } from 'components/organisms/footer/Footer';
import { Navigation } from 'components/organisms/navigation/Navigation';
import { NavigationProvider } from 'context/NavigationProvider';

const Home = () => (
  <main className="h-[300vh] bg-red-100">
    <NavigationProvider>
      <Navigation />
    </NavigationProvider>
    <Footer />
  </main>
);

export default Home;
