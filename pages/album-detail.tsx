import type { GetServerSideProps, NextPage } from 'next'
import React, { useEffect, useContext, useState } from 'react';

import { MainSearch } from '../styles/layout';

import HeroAlbum from '../components/HeroAlbum';

import ListOfAlbumCards from '../components/ListOfAlbumCards';
import { getSession } from 'next-auth/react';
import { isAuthenticated } from '../utils/isAuthenticated';
import axios from 'axios'


const ASAlbumDetail: NextPage = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {

    const getAlbumsSaved = async (offset: number = 0) => {
      const { data } = await axios(`/api/albums?offset=${offset}`);
      setAlbums(data.items);
    }
    getAlbumsSaved();
  }, [])
  return (
    <>
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
