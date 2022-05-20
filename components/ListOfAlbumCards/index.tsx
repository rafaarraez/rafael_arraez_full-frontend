import React, { useEffect, useMemo } from "react";
import { ListOfAlbumCardsContainer } from "./list-of-album-cards";

import CardAlbum from "../CardAlbum";
import { Album } from "../../types/types";

const ListOfAlbumCards: React.FC<any> = ({ albums, isAdded }) => {

  useEffect(() => {
    console.log('test', albums);

    albums?.map((album: Album) => {
      console.log('algo raro', album);
    })
  }, [albums])

  return (
    <ListOfAlbumCardsContainer>

      <p className="list__title">Guarda tus álbumes favoritos de Artist</p>

      <div className="list-albums__wrapper">
        {
          albums.length > 0 &&
          albums?.map((album: Album, index: number) => (
            <CardAlbum isActive={isAdded} dataAlbum={album.album ?? album} key={index} />
          ))
        }
      </div>
    </ListOfAlbumCardsContainer>
  );
};

export default ListOfAlbumCards;
