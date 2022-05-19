import styled from "styled-components";

export const PaginatorContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 25%;
    margin-bottom: 40px;
    button {
        cursor: pointer;
        border: none;
        background-color: transparent;
        outline: none;
    }
    .paginator__item {
        font-size: 1.4rem;
        font-weight: 400;
    }
    @media (max-width: 814px) {
        width: 50%;
    }
    @media (max-width: 514px) {
        width: 100%;
    }
`;