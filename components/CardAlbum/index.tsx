import React, { useEffect } from "react";
import { CardAlbumContainer } from "./card-album-styles";

import ButtonPrimary from "../ButtonPrimary";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const CardAlbum: React.FC<any> = ({ dataAlbum, isActive }: any) => {
  const { title, datePub, coverAlbum } = dataAlbum;

  const sanitizeString = (str: string) => {
    let newStr = str.substring(0, 15);
    newStr = newStr.trim();
    return (str.length > 15) ? newStr + '...' : newStr;
  }

  return (
    <CardAlbumContainer>
      <img src={dataAlbum.images[0].url} alt="" />
      <div className="card-info__wrapper">
        <p className="card__title">{sanitizeString(dataAlbum.name)}</p>
        <p className="card__date-pub">Publicado: {dataAlbum.release_date}</p>
        <div>
          <ButtonPrimary
            text="Add album"
            color={isActive ? "var(--primary-red)" : "var(--primary-yellow)"}
            icon={isActive ? AiOutlineMinus : AiOutlinePlus}
          />
        </div>
      </div>
    </CardAlbumContainer>
  );
};

export default CardAlbum;
