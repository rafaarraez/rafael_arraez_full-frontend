import axios, { AxiosError } from 'axios'
import Head from "next/head";
import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import type { GetServerSideProps, NextPage } from "next";
import Paginator from "../components/Paginator";
import HeroAlbum from "../components/HeroAlbum";
import SearchInput from "../components/SearchInput";
import ListOfAlbumCards from "../components/ListOfAlbumCards";
import { Album, Paginate } from "../types/types";
import { isAuthenticated } from "../utils/isAuthenticated";
import { LoadingWrapper, MainSearch } from "../styles/layout";

const ASSearch: NextPage<any> = () => {
  const [pagination, setPagination] = useState<Paginate>({
    contentPerPage: 0,
    countStart: 0,
    countEnd: 0,
    currentPage: 0,
    totalPages: 0,
    totalItems: 0
  });

  const [searchData, setSearchData] = useState({
    query: 'nirvana',
    offset: 0
  })
  const [searchResults, setSearchResults] = useState<Album[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  useEffect(() => {

    const searchAlbums = async () => {
      setIsLoading(true);
      setError('');
      try {
        const { data: { albums } } = await axios.get(`/api/search?query=${searchData.query}&offset=${searchData.offset}`);
        setPagination({
          contentPerPage: albums.limit,
          countStart: 1,
          countEnd: Math.ceil(albums.total / albums.limit),
          currentPage: Math.ceil((albums.offset + albums.limit) / albums.limit),
          totalPages: Math.ceil(albums.total / albums.limit) - 50,
          totalItems: albums.total
        })
        setSearchResults(albums.items);
      } catch (error: any) {
        setError(error.message);

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

        {isLoading ?
          <LoadingWrapper
          >
            <h1>
              Loading data...
            </h1>
          </LoadingWrapper>
          : (
            <ListOfAlbumCards isAdded={false} albums={searchResults} artistName={searchData.query} error={error} />
          )
        }

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
