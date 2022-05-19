import type { NextPage } from "next";
import { HeroContainer, LinkButton } from "./hero-styles";
import ArrowIcon from "../ArrowIcon";
import { FiArrowRight } from "react-icons/fi";

const Hero: NextPage = () => {
  return (
    <HeroContainer>
      <div className="hero__icon-wrapper">
        <ArrowIcon />
      </div>
      <div className="hero__info-container">
        <h1 className="hero__title">
          Disfruta de la
          <br />
          <span>mejor música</span>
        </h1>
        <p className="hero__subtitle">
          Accede a tu cuenta para guardar tus albumes favoritos.
        </p>
        <LinkButton href="/search">
          Login
          <span>
            <FiArrowRight size={20} />
          </span>
        </LinkButton>
      </div>
    </HeroContainer>
  );
};

export default Hero;
