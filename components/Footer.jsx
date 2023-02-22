import Image from "next/image";
import React from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { WiStars } from "react-icons/wi";
import { AiOutlineCopyright } from "react-icons/ai";

import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="w-full   bg-gray-800">
      <div className="max-w-[1024px] py-[40px] mx-auto sm:px-[5px] px-[10px] flex justify-between items-start">
        <div className="w-[120px]">
          <Image src={Logo} alt="logo" />
        </div>
        <div className=" flex flex-col gap-[24px] sm:items-start items-end sm:w-[300px] w-[200px]">
          <div className="flex items-center gap-[5px] text-white hover:text-primary cursor-pointer group">
            <BsFillCameraVideoFill size={20} />
            <h1 className="text-sm font-raleWay group-hover:underline">
              Videos
            </h1>
          </div>
          <div className="flex items-center gap-[5px] text-white hover:text-primary cursor-pointer group">
            <BiCategoryAlt size={20} />
            <h1 className="text-sm font-raleWay group-hover:underline">
              Channels
            </h1>
          </div>
          <div className="flex items-center gap-[5px] text-white hover:text-primary cursor-pointer group">
            <WiStars size={20} />
            <h1 className="text-sm font-raleWay group-hover:underline">
              Pornstars
            </h1>
          </div>
        </div>
      </div>

      <div
        className="w-full py-[20px] flex justify-center items-center gap-[8px] border-t-[1px] border-primary
       border-opacity-50"
      >
        <h1 className="text-sm font-raleWay text-primary font-bold">
          Burmese Bang
        </h1>
        <AiOutlineCopyright className="text-white" />
        <h1 className="text-sm font-raleWay text-white">All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
