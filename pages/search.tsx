import type { GetServerSideProps, NextPage } from "next";
import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from "react";

import SearchInput from "../components/SearchInput";
import HeroAlbum from "../components/HeroAlbum";
import ListOfAlbumCards from "../components/ListOfAlbumCards";
import Paginator from "../components/Paginator";

import { MainSearch } from "../styles/layout";
import { getSession, useSession } from "next-auth/react";
import { getToken } from "next-auth/jwt"
import { isAuthenticated } from "../utils/isAuthenticated";

const ASSearch: NextPage<any> = () => {
  const [pagination, setPagination] = useState({
    contentPerPage: 1,
    countStart: 0,
    countEnd: 0,
    currentPage: 1,
    totalPages: 0,
  });
  const [pages, setPages] = useState<any>([]);
  const [search, setSearch] = useState("");
  const searchInput = useRef<any>(null);

  const { data: session, status } = useSession()
  console.log(session, status);

  return (

    <>
      <MainSearch>
        <HeroAlbum isAdded={false}>
          <SearchInput />
        </HeroAlbum>

        <ListOfAlbumCards />
        <Paginator />
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
