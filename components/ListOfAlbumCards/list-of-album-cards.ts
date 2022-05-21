import styled from "styled-components";

export const ListOfAlbumCardsContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    .list__title {
        color: var(--white);
        font-size: 1.6rem;
        line-height: 3.2rem;
        font-weight: 400;
        margin-bottom: 15px;
        &--bold {
            font-weight: 700;
            font-size: 2.4rem;
        }
    }
    .list-albums__wrapper {
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-gap: 25px;

        .no__found__albums{
            font-size: 4rem !important;
            color: var(--white);
        }
    }
    @media (max-width: 894px) {
        .list-albums__wrapper {
            grid-template-columns: repeat(2,1fr);
        }   
    }
    @media (max-width: 514px) {
        .list-albums__wrapper {
            grid-template-columns: 1fr;
        }   
    }
`;

export const ErrorMessage = styled.h1`
    font-size: 4rem !important;
            color: var(--white);
`