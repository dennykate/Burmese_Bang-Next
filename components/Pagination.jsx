import { useRouter } from "next/router";
import React from "react";

const Pagination = ({ pageCount, currentPage, path }) => {
  const router = useRouter();

  const handleNextClick = () => {
    if (pageCount == currentPage) return;

    router.push(`${path}/?page=${parseInt(currentPage) + 1}`);
  };

  const handlePrevClick = () => {
    if (currentPage <= 1) return;

    router.push(`${path}/?page=${parseInt(currentPage) - 1}`);
  };

  return (
    <div className="w-full sm:py-[20px] py-[10px] pb-[30px] px-[5px] flex justify-center items-center">
      <div className="max-w-[320px] h-[40px] flex">
        <button
          onClick={handlePrevClick}
          className="w-[100px] h-full bg-primary text-white font-raleWay font-semibold 
        text-sm hover:bg-opacity-80 flex justify-center items-center"
        >
          {"<<"} Prev
        </button>
        <div
          className="w-[120px] h-[40px] flex justify-center items-center text-white font-raleWay text-sm
        border-[1px] border-primary"
        >
          Page : {currentPage}/{pageCount}
        </div>
        <button
          onClick={handleNextClick}
          className="w-[100px] h-full bg-primary text-white font-raleWay font-semibold 
        text-sm hover:bg-opacity-80 flex justify-center items-center"
        >
          Next {">>"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
