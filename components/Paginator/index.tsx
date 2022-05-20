import React, { useState, useEffect, useContext } from "react";
import { PaginatorContainer } from "./paginator-styles";
import {
	MdOutlineArrowBackIos,
	MdOutlineArrowForwardIos,
} from "react-icons/md";
import { usePagination, DOTS } from '../../hooks/usePagination';

const Paginator: React.FC<any> = ({
	setSearchData,
	searchData,
	contentPerPage,
	totalCount,
	siblingCount = 1,
	currentPage,
	pageSize }: any) => {


	const paginationRange: Array<any> | undefined = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	if (currentPage === 0 || paginationRange!.length < 2) {
		return null;
	}

	let lastPage = paginationRange![paginationRange!.length - 1];

	return (
		<PaginatorContainer>
			<button onClick={() => {
				setSearchData({ ...searchData, offset: searchData.offset - contentPerPage })
			}}
				disabled={searchData.offset === 0}>
				<MdOutlineArrowBackIos color={"var(--white)"} size={20} />
			</button>

			{paginationRange!.map(pageNumber => {
				if (pageNumber === DOTS) {
					return <p
						className="paginator__item"
						style={
							currentPage === pageNumber
								? { color: "var(--primary-yellow)", fontWeight: "700" }
								: { color: "var(--white)" }
						}
					>&#8230;</p>;
				}
				return (
					<p
						className="paginator__item"
						style={
							currentPage === pageNumber
								? { color: "var(--primary-yellow)", fontWeight: "700" }
								: { color: "var(--white)", cursor: "pointer" }
						}
						onClick={() => {
							setSearchData({ ...searchData, offset: contentPerPage * (pageNumber - 1) })
						}}
					>
						{pageNumber}
					</p>)
			})}


			<button onClick={() => {
				setSearchData({ ...searchData, offset: searchData.offset + contentPerPage })
			}}
				disabled={currentPage === lastPage}>
				<MdOutlineArrowForwardIos color={"var(--white)"} size={20} />
			</button>


		</PaginatorContainer>
	);
};

export default Paginator;
