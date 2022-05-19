import React from "react";
import { CardAlbumContainer } from "./card-album-styles";

import ButtonPrimary from "../ButtonPrimary";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const CardAlbum: React.FC<any> = ({ dataAlbum, isActive }: any) => {
  const { title, datePub, coverAlbum } = dataAlbum;
  return (
    <CardAlbumContainer>
      <img src={'/assets/images/Image1.png'} alt="" />
      <div className="card-info__wrapper">
        <p className="card__title">{title}</p>
        <p className="card__date-pub">date</p>
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
