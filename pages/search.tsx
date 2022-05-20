import type { GetServerSideProps, NextPage } from "next";
import React, { useState, useEffect } from "react";

import SearchInput from "../components/SearchInput";
import HeroAlbum from "../components/HeroAlbum";
import ListOfAlbumCards from "../components/ListOfAlbumCards";
import Paginator from "../components/Paginator";

import { MainSearch } from "../styles/layout";
import { getSession } from "next-auth/react";
import { isAuthenticated } from "../utils/isAuthenticated";
import axios from 'axios'
import { Album } from "../types/types";
import Head from "next/head";

const ASSearch: NextPage<any> = () => {
  const [pagination, setPagination] = useState({
    contentPerPage: 1,
    countStart: 1,
    countEnd: 100,
    currentPage: 1,
    totalPages: 10,
  });
  const [pages, setPages] = useState<any>([]);
  const [query, setQuery] = useState<string>('nirvana');
  const [offset, setOffset] = useState<number>(0);
  const [searchResults, setSearchResults] = useState<Album[]>([]);

  useEffect(() => {

    const searchAlbums = async () => {
      const { data: { albums } } = await axios(`/api/search?query=${query}&offset=${offset}`);
      setSearchResults(albums.items);
    }

    searchAlbums();
  }, [query, offset]);

  return (
    <>
      <Head>
        <title>Search album on Spotify {query}</title>
      </Head>

      <MainSearch>
        <HeroAlbum isAdded={false}>
          <SearchInput setQuery={setQuery} />
        </HeroAlbum>
        <ListOfAlbumCards isAdded={false} albums={searchResults} />
        <Paginator setOffset={setOffset} currentOffset={offset} />
      </MainSearch>
    </>
  );
};

export default ASSearch;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  console.log(Math.floor(Date.now()) >= (session as any).accessTokenExpires * 1000);
  console.log(Math.floor(Date.now()), (session as any).accessTokenExpires * 1000);

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
