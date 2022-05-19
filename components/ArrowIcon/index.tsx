import React from "react";
import styled from "styled-components";

export const Svg = styled.svg`
  height: 100%;
  width: auto;
`;
const ArrowIcon = (props:any) => (
  <Svg
    width={454}
    height={462}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    viewBox="0 0 454 462"
  >
    <path
      d="M464 0H93.5v101.5h198L0 393l71.5 71.5 292-292v216H464V0Z"
      fill="#D6F379"
    />
  </Svg>
)

export default ArrowIcon;