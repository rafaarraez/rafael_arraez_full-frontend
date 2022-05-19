import React, { useEffect, useMemo } from "react";
import { ListOfAlbumCardsContainer } from "./list-of-album-cards";

import CardAlbum from "../CardAlbum";

const ListOfAlbumCards: React.FC<any> = ({}) => {
  const isAdded = false;
  return (
    <ListOfAlbumCardsContainer>
      {isAdded ? (
        <p className="list__title list__title--bold">Artist</p>
      ) : (
        <p className="list__title">Guarda tus álbumes favoritos de Artist</p>
      )}
      <div className="list-albums__wrapper">
          <CardAlbum isActive={isAdded} dataAlbum={""}  />
      </div>
    </ListOfAlbumCardsContainer>
  );
};

export default ListOfAlbumCards;
