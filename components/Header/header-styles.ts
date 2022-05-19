import styled from "styled-components";

export const AmHeader = styled.header`
  width: 100%;
  height: auto;
  position: fixed;
  z-index: 2;
  background-color: var(--primary-black);
  top: 0;
  .nav {
    padding: 30px 80px;
    display: flex;
    justify-content: space-between;
    .nav__logo {
      filter: invert(0);
      transition: filter 500ms ease-in-out;
    }
    .header-links__container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 40px;
      padding: 3px 0;
      .text__item {
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--white);
        text-decoration: none;
        transition: color 500ms;
        &:hover {
          color: var(--primary-yellow);
          transition: color 500ms;
        }
      }
      .link--active {
        color: var(--primary-yellow);
      }
      hr {
        border: none;
        border-left: 1px solid var(--white);
        height: 100%;
        width: 1px;
      }
      .header__button {
        border: none;
        display: block;
        align-items: center;
        line-height: 1px;
        background-color: transparent;
        &:hover {
          color: var(--primary-yellow);
        }
        &--theme {
          background: transparent;
          border: none;
          line-height: 1px;
          cursor: pointer;
          outline: none;
        }
      }
    }
  }
  @media (max-width: 654px) {
    .nav .header-links__container {
      gap: 15px;
    }
  }
  @media (max-width: 514px) {
    .nav {
      padding: 30px 40px;
      .header-links__container .text__item {
        font-size: 1.2rem;
      }
    }
  }
`;
