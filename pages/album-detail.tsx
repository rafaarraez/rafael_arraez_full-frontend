import type { GetServerSideProps, NextPage } from 'next'
import React, { useEffect, useContext, useState } from 'react';

import { MainSearch } from '../styles/layout';

import HeroAlbum from '../components/HeroAlbum';

import ListOfAlbumCards from '../components/ListOfAlbumCards';
import { getSession } from 'next-auth/react';
import { isAuthenticated } from '../utils/isAuthenticated';
import axios from 'axios';
import Head from 'next/head';


const ASAlbumDetail: NextPage = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getAlbumsSaved = async () => {
      const { data } = await axios(`/api/albums`);
      setAlbums(data.items);
    }
    getAlbumsSaved();
  }, [])
  return (
    <>
      <Head>
        <title>Albums</title>
      </Head>
      <MainSearch>
        <HeroAlbum isAdded={true}>
        </HeroAlbum>

        <ListOfAlbumCards isAdded={true} albums={albums} />
      </MainSearch>
    </>
  )
}

export default ASAlbumDetail;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!(await isAuthenticated(session))) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: {} };
};
