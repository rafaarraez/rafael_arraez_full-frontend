import React, { useState, useEffect, useContext } from "react";
import { PaginatorContainer } from "./paginator-styles";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Paginator: React.FC<any> = ({ nextP, prevP, pagesT, current }: any) => {
 
  return (
    <PaginatorContainer>
      <button onClick={prevP}>
        <MdOutlineArrowBackIos color={"var(--white)"} size={20} />
      </button>
      
          <p
            className="paginator__item"
            style={
              "item" === current
                ? { color: "var(--primary-yellow)", fontWeight: "700" }
                : { color: "var(--white)" }
            }
          >
            {"item"}
          </p>
        );

      <button onClick={nextP}>
        <MdOutlineArrowForwardIos color={"var(--white)"} size={20} />
      </button>
    </PaginatorContainer>
  );
};

export default Paginator;
