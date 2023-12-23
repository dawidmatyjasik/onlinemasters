import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Online Masters | Strony Internetowe | Sklepy internetowe | Opieka nad stronami Wordpress | Aplikacje webowe | Aplikacje mobilne | Pozycjonowanie | Reklama w internecie',
    short_name: 'Online Masters',
    description:
      'Online Masters - Twój klucz do sukcesu online! Tworzymy strony, sklepy i aplikacje internetowe, zajmujemy się pozycjonowaniem i reklamą w internecie. Dołącz do świata cyfrowych możliwości!',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
