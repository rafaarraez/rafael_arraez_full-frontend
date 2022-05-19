import styled from "styled-components";
import { Title } from "../../styles/texts";

export const HeroContainer = styled.section`
    display: flex;  
    justify-content: center;
    align-items:  center;
    flex-direction: row;
    width: 100%; 
    flex-grow: 1; 
    padding: 10% 0;
    gap: 90px;
    min-height:100vh;
    
    .hero__icon-wrapper { 
        display: flex;
        align-items: center; 
        justify-content: center;
        width: 35%; 
        position: relative;
    } 
    .hero__info-container { 
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 35%; 
    }
    .hero__title {
        ${Title} 
        margin-bottom: 35px;
    }
    .hero__subtitle {
        color: var(--white);
        font-weight: 400;
        font-size: 2rem;
        margin-bottom: 100px; 
        display: inline-block;
        width: 80%;
    }
    @media (max-width: 1354px) {
        .hero__icon-wrapper {
            justify-content: start; 
        }
        .hero__title {
            font-size: 5rem;
        }
    }
    @media (max-width: 1224px) { // tablet
        padding: calc(87px + 10%) 5% 10%;
        flex-direction: column;
        .hero__icon-wrapper {
            height: 45vh;
            width: 50%;
            justify-content: start;
        }
        .hero__info-container {
            width: 100%;
        }
        .hero__title {
            font-size: 6.4rem;
            transform-origin: 0;
            margin-bottom: 75px;
        }
        .hero__subtitle {
            font-size: 1.8rem;
            font-weight: 300;
            padding-right: 65%;
            width: 100%;
        }
    }
    @media (max-width: 824px) {
        .hero__title {
            font-size: 6.4rem;
        }
        .hero__info-container {
            align-items: start;
        }
        .hero__subtitle {
            padding: 0;
        }
    }
    @media (max-width: 738px) {
        align-items: center;
        .hero__icon-wrapper {
            height: 45%;
            width: 45vw;
        }
        .hero__title {
            font-size: 5.4rem;
        }
        .hero__info-container {
            padding: 0 8%;
        }
    }
    @media (max-width: 514px) {
        .hero__title {
            font-size: 4.6rem;
        }
        .hero__info-container {
            padding: 0 3%;
        }
        .hero__icon-wrapper {
            height: 40vh;
            width: 60vw;
        }
    }
`;

export const LinkButton = styled.a`
    text-decoration: none;
    color: var(--white);
    font-size: 1.4rem;
    font-weight: 500;
    transform: scaleX(1.2);
    transform-origin: 0;
    span {
        padding-left: 10px;
        vertical-align: middle;
    }
    @media (max-width: 1024px) {
        font-size: 2.2rem;
    }
    @media (max-width: 738px) {
        margin-bottom: 90px;
    }
`;