import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    border-radius: 24px;
    background-color: var(--white);
    width: 100%;
    .search__input {
        width: 80%;
        border: none;
        font-size: 1.6rem;
        color: var(--black);
        font-weight: 500;
        outline: none;
        background-color:  transparent;
        font-weight: bold;
    }
    .button__wrapper {
        width: 20%;
        display: flex;
        justify-content: end;
    }
`; 