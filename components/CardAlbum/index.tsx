import React, { useEffect, useState } from "react";
import { CardAlbumContainer } from "./card-album-styles";

import ButtonPrimary from "../ButtonPrimary";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import axios from "axios";

const CardAlbum: React.FC<any> = ({ dataAlbum, isActive }) => {
  const { name, release_date, images, id } = dataAlbum;

  const [albumStatus, setAlbumStatus] = useState<boolean>(isActive);

  const sanitizeString = (str: string) => {
    let newStr = str.substring(0, 15);
    newStr = newStr.trim();
    return (str.length > 15) ? newStr + '...' : newStr;
  }

  const deleteItem = async (id: string) => {
    const res = await axios.delete(`/api/albums?id=${id}`);
    setAlbumStatus(false);
  }

  const addItem = async (id: string) => {
    const res = await axios.put(`/api/albums?id=${id}`);
    setAlbumStatus(true);
  }
  return (
    <CardAlbumContainer>
      <img src={images[0].url} alt={name} />
      <div className="card-info__wrapper">
        <p className="card__title">{sanitizeString(name)}</p>
        <p className="card__date-pub">Publicado: {release_date}</p>
        <div>
          <ButtonPrimary
            text={albumStatus ? "Remove album" : "Add album"}
            color={albumStatus ? "var(--primary-red)" : "var(--primary-yellow)"}
            icon={albumStatus ? AiOutlineMinus : AiOutlinePlus}
            click={() => { albumStatus ? deleteItem(id) : addItem(id) }}
          />
        </div>
      </div>
    </CardAlbumContainer>
  );
};

export default CardAlbum;
