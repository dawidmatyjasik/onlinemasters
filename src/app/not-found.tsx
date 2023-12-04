import { permanentRedirect } from 'next/navigation';

const NotFound = () => {
  permanentRedirect('https://onlinemasters.pl/');
};

export default NotFound;
