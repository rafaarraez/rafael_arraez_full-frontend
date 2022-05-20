import type { GetServerSideProps, NextPage } from 'next'
import React, { useEffect, useContext } from 'react';

import { MainSearch } from '../styles/layout';

import HeroAlbum from '../components/HeroAlbum';

import ListOfAlbumCards from '../components/ListOfAlbumCards';
import { getSession } from 'next-auth/react';
import { isAuthenticated } from '../utils/isAuthenticated';


const ASAlbumDetail: NextPage = () => {

  return (
    <>
      <MainSearch>
        <HeroAlbum isAdded={true}>
        </HeroAlbum>

        <ListOfAlbumCards isAdded={true} />
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
