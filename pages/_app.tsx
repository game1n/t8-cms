import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const parseData = JSON.parse(localStorage.getItem('session') as string);
    parseData?.session.access_token ? router.push('/home') : router.push('/login');
  }, [])

  return (
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
  );
}
