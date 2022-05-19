import type { NextPage } from "next";
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
