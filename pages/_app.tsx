import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const protectedRoutes = ['/home', '/add-content'];
  const openRoutes = ['/login', '/read'];
  useEffect(() => {
    const parseData = JSON.parse(localStorage.getItem('session') as string);
    if(protectedRoutes.includes(window.location.pathname)){
     if(parseData?.session.access_token){
        return;
     }
     router.push('/login');
    }
    else if(openRoutes.includes(window.location.pathname)){
      if(window.location.pathname === '/read/:id'){
        console.log('triggered')
        return;
      }
      if(parseData?.session.access_token){
        router.push('/home');
     }
     else return;
    }
    if(window.location.pathname === '/'){
       parseData?.session.access_token ?  router.push('/home') : router.push('/login');
       return;
    }
  }, [])

  return (
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
  );
}
