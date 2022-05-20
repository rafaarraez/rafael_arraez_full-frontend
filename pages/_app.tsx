import type { AppProps } from "next/app";
import Header from "../components/Header";
import { GlobalStyle } from "../styles/global";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // const router = useRouter();
  // const { code } = router.query
  // console.log(code);

  // if (code) router.push('/search')

  return (
    <SessionProvider session={session}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
