import { Montserrat } from 'next/font/google';
import Layout from '@/components/Layout/Default';
import '../styles/globals.css';
import './index.module.scss';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={montserrat.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
