import styled from "styled-components";

export const Button = styled.button`
    border: none;
    outline: none;
    border-radius: 24px;
    font-size: 1.6rem;
    padding: 10px 0px;
    font-weight: 500;
    background-color: ${({color}) => (color)};
    color: black;
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
        margin-right: 5px;
        line-height: 0px;
    }
`;
