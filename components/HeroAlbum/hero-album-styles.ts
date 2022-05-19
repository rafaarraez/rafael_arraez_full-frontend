import styled from "styled-components"

export const HeroContainer = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: calc(100px + var(--header-width)) 20% 100px;
    .hero__title {
        font-size: 6.4rem;
        font-weight: 700;
        line-height: 7.8rem;
        text-align: center;
        color: var(--primary-yellow);
        margin-bottom: 40px;
        span {
          color: var(--white);
        }
    } 
    .hero__subtitle {
        padding: 0 17%;
        font-size: 1.6rem;
        line-height: 3.2rem;
        text-align: center;
        font-weight: 400;
        color: var(--white);
        margin-bottom: 40px;
    }
    @media (max-width: 1114px) {
        padding: calc(100px + var(--header-width)) 0% 100px;
    }
    @media (max-width: 514px) {
        .hero__title {
            text-align: start;
            font-size: 5.2rem;
            line-height: 6.8rem;
        }
        .hero__subtitle {
            padding: 0;
            font-size: 1.4rem;
            text-align: start;
        }
    }
`;