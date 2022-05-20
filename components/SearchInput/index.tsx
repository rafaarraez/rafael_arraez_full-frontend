import React, { useEffect, useState } from "react";
import { SearchContainer } from "./search-styles";
import ButtonPrimary from "../ButtonPrimary";


const SearchInput: React.FC<any> = ({ setQuery }) => {
  const [value, setValue] = useState<string>("");

  return (
    <SearchContainer>
      <input
        type="text"
        name="search"
        placeholder="Busca alguna cancion...."
        className="search__input"
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="button__wrapper" >
        <ButtonPrimary text="Search" paddingBtn="30%" click={() => setQuery(value)} />
      </div>
    </SearchContainer>
  )
}

export default SearchInput;