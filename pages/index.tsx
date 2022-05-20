import type { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Hero from "../components/Hero";
import { isAuthenticated } from '../utils/isAuthenticated';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login with Spotify</title>
      </Head>
      <Hero />
    </>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if ((await isAuthenticated(session))) {
    return {
      redirect: {
        destination: "/search",
        permanent: false,
      },
    };
  }
  return { props: {} };
};