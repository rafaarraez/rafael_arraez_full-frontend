import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
/* import type { NextComponentType, NextPage } from 'next'; */
import { AmHeader } from "./header-styles";
import Link from "next/link";
import { FiSun } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";

const Header: React.FC = () => {
  const router = useRouter();
  const [matches, setMatches] = useState(false);
  const user = false;

  return (
    <AmHeader>
      <nav className="nav">
        <Link href="/">
          <a>
            {!matches || !user ? (
              <img
                style={{ filter: "invert(0)" }}
                src="/assets/images/Logo_aluxion.png"
                alt="Logo aluxion"
                className="nav__logo"
              />
            ) : (
              <img
                style={{ filter: "invert(0)" }}
                src="/assets/images/logo_responsive_aluxion.png"
                alt="Logo aluxion"
                className="nav__logo"
              />
            )}
          </a>
        </Link>
        {user && (
          <div className="header-links__container">
            <Link href="/search">
              <a
                className={
                  router.pathname === "/search"
                    ? "text__item link--active"
                    : "text__item"
                }
              >
                Buscar
              </a>
            </Link>
            <Link href="/album-detail">
              <a
                className={
                  router.pathname === "/album-detail"
                    ? "text__item link--active"
                    : "text__item"
                }
              >
                My albums
              </a>
            </Link>
            <hr />
            <button className="text__item header__button">
              {!matches ? (
                "Cerrar Sesion"
              ) : (
                <IoLogOutOutline color={"var(--white)"} size={20} />
              )}
            </button>
            <hr />
            <button
              type="button"
              onClick={() => ""}
              className="header__button--theme"
            >
              <FiSun color={"var(--white)"} size={20} />
            </button>
          </div>
        )}
      </nav>
    </AmHeader>
  );
};

export default Header;
