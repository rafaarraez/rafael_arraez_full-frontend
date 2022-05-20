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
import { Album, Paginate } from "../types/types";
import Head from "next/head";

const ASSearch: NextPage<any> = () => {
  const [pagination, setPagination] = useState<Paginate>({
    contentPerPage: 0,
    countStart: 0,
    countEnd: 0,
    currentPage: 0,
    totalPages: 0,
    totalItems: 0
  });
  const [pages, setPages] = useState<any>([]);
  const [searchData, setSearchData] = useState({
    query: 'nirvana',
    offset: 0
  })
  const [searchResults, setSearchResults] = useState<Album[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {

    const searchAlbums = async () => {
      setIsLoading(true);
      try {
        const { data: { albums } } = await axios(`/api/search?query=${searchData.query}&offset=${searchData.offset}`);
        console.log(albums);
        setPagination({
          contentPerPage: albums.limit,
          countStart: 1,
          countEnd: Math.ceil(albums.total / albums.limit),
          currentPage: Math.ceil((albums.offset + albums.limit) / albums.limit),
          totalPages: Math.ceil(albums.total / albums.limit) - 50,
          totalItems: albums.total
        })
        setSearchResults(albums.items);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    searchAlbums();
  }, [searchData]);



  return (
    <>
      <Head>
        <title>Search album on Spotify {searchData.query}</title>
      </Head>

      <MainSearch>
        <HeroAlbum isAdded={false}>
          <SearchInput setSearchData={setSearchData} />
        </HeroAlbum>

        {isLoading ? <h1>LODING DATRA</h1> : <ListOfAlbumCards isAdded={false} albums={searchResults} artistName={searchData.query} />}

        <Paginator
          setSearchData={setSearchData}
          searchData={searchData}
          contentPerPage={pagination.contentPerPage}
          pagination={pagination}
          currentPage={pagination.currentPage}
          totalCount={pagination.totalItems}
          pageSize={pagination.contentPerPage}
        />
      </MainSearch>
    </>
  );
};

export default ASSearch;

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
