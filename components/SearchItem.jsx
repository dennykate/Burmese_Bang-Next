import Link from "next/link";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const SearchItem = ({ title, data }) => {
  const [showItem, setShowItem] = useState(false);

  return (
    <div className=" flex flex-col ">
      <div
        onClick={() => setShowItem(!showItem)}
        className="sm:px-[14px] px-[10px] py-[5px] border-b-[2px] border-primary flex gap-[3px] items-center cursor-pointer"
      >
        <h1 className=" font-raleWay sm:text-base text-xs text-white">
          {title}
        </h1>

        <AiFillCaretDown color="white" />
      </div>

      {showItem && (
        <div className="ralative z-10">
          <div
            className="absolute flex flex-col justify-center items-center bg-gray-800
    border-[1px] border-gray-700 rounded-sm"
          >
            {data.map(({ name, href }, index) => (
              <Link target="_blank" href={href} key={index}>
                <h1 className=" text-sm text-gray-300 font-raleWay py-[8px] cursor-pointer hover:text-primary px-[14px]">
                  {name}
                </h1>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchItem;
