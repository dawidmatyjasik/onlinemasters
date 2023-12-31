import 'styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Montserrat, Poppins } from 'next/font/google';
import Script from 'next/script';

import { Footer } from 'components/organisms/footer/Footer';
import { Navigation } from 'components/organisms/navigation/Navigation';
import { NavigationProvider } from 'context/NavigationProvider';
import { cn } from 'lib/utils';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  display: 'swap',
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="pl" className={cn(montserrat.variable, poppins.variable, 'font-sans')}>
    <Script src="/mailerLite.js" />
    <body className="flex min-h-screen w-screen flex-col">
      <NavigationProvider>
        <Navigation />
      </NavigationProvider>
      <main className="flex min-h-screen flex-1 flex-col gap-[100px] pb-[100px] pt-[200px]">{children}</main>

      <Footer />
      <Analytics />
      <SpeedInsights />
    </body>
  </html>
);

export default RootLayout;
