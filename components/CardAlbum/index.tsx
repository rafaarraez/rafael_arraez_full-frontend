import React, { useEffect, useState } from "react";
import { CardAlbumContainer } from "./card-album-styles";

import ButtonPrimary from "../ButtonPrimary";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import axios from "axios";

const CardAlbum: React.FC<any> = ({ dataAlbum, isActive }) => {

  const { name, release_date, images, id } = dataAlbum;
  const [albumIsActive, setAlbumIsActive] = useState<boolean>(isActive);

  const sanitizeString = (str: string) => {
    let newStr = str.substring(0, 15);
    newStr = newStr.trim();
    return (str.length > 15) ? newStr + '...' : newStr;
  }

  const deleteItem = async (id: string) => {
    try {
      await axios.delete(`/api/albums?id=${id}`);
      setAlbumIsActive(!albumIsActive);
    } catch (error) {
      console.log(error);
    }
  }

  const addItem = async (id: string) => {
    try {
      await axios.put(`/api/albums?id=${id}`);
      setAlbumIsActive(!albumIsActive);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <CardAlbumContainer>
      <img src={images[0].url} alt={name} />
      <div className="card-info__wrapper">
        <p className="card__title">{sanitizeString(name)}</p>
        <p className="card__date-pub">Publicado: {release_date}</p>
        <div>
          <ButtonPrimary
            text={albumIsActive ? "Remove album" : "Add album"}
            color={albumIsActive ? "var(--primary-red)" : "var(--primary-yellow)"}
            icon={albumIsActive ? AiOutlineMinus : AiOutlinePlus}
            click={() => { albumIsActive ? deleteItem(id) : addItem(id) }}
          />
        </div>
      </div>
    </CardAlbumContainer>
  );
};

export default CardAlbum;
