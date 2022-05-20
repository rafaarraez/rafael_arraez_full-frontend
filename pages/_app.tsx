import type { AppProps } from "next/app";
import Header from "../components/Header";
import { GlobalStyle } from "../styles/global";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  return (
    <SessionProvider session={session}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
