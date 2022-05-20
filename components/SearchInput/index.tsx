import React, { useEffect, useState } from "react";
import { SearchContainer } from "./search-styles";
import ButtonPrimary from "../ButtonPrimary";


const SearchInput: React.FC<any> = ({ searchAlbums }) => {
  const [query, setQuery] = useState<string>("");


  return (
    <SearchContainer>
      <input
        type="text"
        name="search"
        placeholder="Busca alguna cancion...."
        className="search__input"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="button__wrapper" >
        <ButtonPrimary text="Search" paddingBtn="30%" click={() => searchAlbums(query, 0)} />
      </div>
    </SearchContainer>
  )
}

export default SearchInput;