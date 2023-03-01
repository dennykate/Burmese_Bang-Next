import { useRouter } from "next/router";
import React from "react";

const Pagination = ({ pageCount, currentPage, path, isQueries }) => {
  const router = useRouter();

  const handleNextClick = () => {
    if (pageCount == currentPage) return;

    if (isQueries) {
      router.push(`${path}&page=${parseInt(currentPage) + 1}`);
    } else {
      router.push(`${path}/?page=${parseInt(currentPage) + 1}`);
    }
  };

  const handlePrevClick = () => {
    if (currentPage <= 1) return;

    if (isQueries) {
      router.push(`${path}&page=${parseInt(currentPage) - 1}`);
    } else {
      router.push(`${path}/?page=${parseInt(currentPage) - 1}`);
    }
  };

  return (
    <div className="w-full sm:py-[20px] py-[10px] pb-[30px] px-[5px] flex justify-center items-center">
      <div className="sm:w-[320px] w-[240px] h-[40px] flex">
        <button
          onClick={handlePrevClick}
          className="sm:w-[100px] w-[75px] h-full bg-primary text-white font-raleWay font-semibold 
        sm:text-sm text-xs hover:bg-opacity-80 flex justify-center items-center"
        >
          {"<<"} Prev
        </button>
        <div
          className="sm:w-[120px] w-[90px] h-[40px] flex justify-center items-center text-white font-raleWay sm:text-sm text-xs
        border-[1px] border-primary"
        >
          Page : {currentPage}/{pageCount}
        </div>
        <button
          onClick={handleNextClick}
          className="sm:w-[100px] w-[75px] h-full bg-primary text-white font-raleWay font-semibold 
        sm:text-sm text-xs hover:bg-opacity-80 flex justify-center items-center"
        >
          Next {">>"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
