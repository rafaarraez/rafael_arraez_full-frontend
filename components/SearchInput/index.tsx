import React from "react";
import { SearchContainer } from "./search-styles";
import ButtonPrimary from "../ButtonPrimary";


const SearchInput: React.FC<any> = ({ }) => {

  return (
    <SearchContainer>
      <input
        type="text"
        name="search"
        placeholder="Busca alguna cancion...."
        className="search__input"
      />
      <div className="button__wrapper" >
        <ButtonPrimary text="Search" paddingBtn="30%" click={() => ''}/>
      </div>
    </SearchContainer>
  )
}

export default SearchInput;