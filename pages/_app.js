import { Montserrat } from 'next/font/google';
import '../styles/globals.css'; // Global stilleri buraya dahil edin
import './index.module.scss'; // Modül stilleri burada

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={montserrat.className}>
      <Component {...pageProps} />
    </div>
  );
}
