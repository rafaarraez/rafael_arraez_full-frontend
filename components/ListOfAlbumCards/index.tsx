import React, { useEffect, useMemo } from "react";
import { ListOfAlbumCardsContainer } from "./list-of-album-cards";

import CardAlbum from "../CardAlbum";
import { Album } from "../../types/types";

const ListOfAlbumCards: React.FC<any> = ({ albums, isAdded, artistName }) => {

  return (
    <ListOfAlbumCardsContainer>

      <p className="list__title">Guarda tus álbumes favoritos de {artistName}</p>

      <div className="list-albums__wrapper">
        {
          (albums.length > 0) ?
            albums?.map((album: Album, index: number) => (
              <CardAlbum isActive={isAdded} dataAlbum={album.album ?? album} key={index} />
            ))
            : (
              <h1 className="no__found__albums">No hemos encontrado resultados😞💔</h1>
            )
        }
      </div>
    </ListOfAlbumCardsContainer>
  );
};

export default ListOfAlbumCards;
