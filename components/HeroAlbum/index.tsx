import React from "react";
import { HeroContainer } from "./hero-album-styles";

const HeroAlbum: React.FC<any> = ({ children, isAdded }) => {
  return (
    <HeroContainer>
      <div className="hero-info__wrapper">
        {!isAdded ? (
          <p className="hero__title">
            Busca tus
            <br />
            <span>albumes</span>
          </p>
        ) : (
          <p className="hero__title">
            Mis albumes
            <br />
            <span>guardados</span>
          </p>
        )}
        {!isAdded ? (
          <p className="hero__subtitle">
            Encuentra tus artistas favoritos gracias a nuestro buscador y guarda
            tus álbumes favoritos
          </p>
        ) : (
          <p className="hero__subtitle">
            Disfruta de tu música a un solo click y descube que discos has
            guardado dentro de “mis álbumes”
          </p>
        )}
      </div>
      {children}
    </HeroContainer>
  );
};

export default HeroAlbum;
