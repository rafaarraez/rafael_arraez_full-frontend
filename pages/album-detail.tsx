import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import type { GetServerSideProps, NextPage } from 'next'
import { Album } from '../types/types';
import HeroAlbum from '../components/HeroAlbum';
import { isAuthenticated } from '../utils/isAuthenticated';
import ListOfAlbumCards from '../components/ListOfAlbumCards';
import { LoadingWrapper, MainSearch } from '../styles/layout';


const ASAlbumDetail: NextPage = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  useEffect(() => {
    const getAlbumsSaved = async () => {
      setIsLoading(true);
      const { data } = await axios.get(`/api/albums`);
      setAlbums(data.items);
      setIsLoading(false);
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

        {isLoading ?
          <LoadingWrapper>
            <h1>
              Loading data...
            </h1>
          </LoadingWrapper>
          :
          <ListOfAlbumCards isAdded={true} albums={albums} error={error} />
        }

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
