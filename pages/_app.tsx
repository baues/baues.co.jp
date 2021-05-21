import { useEffect } from 'react';
import AOS from 'aos';
import 'styles/globals.scss';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  return <Component {...pageProps} />;
}

export default MyApp;
