import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiSearchLine } from "react-icons/ri";

import Logo from "../assets/logo.png";
import BannerAds from "./BannerAds";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="w-full px-[12px] sm:h-[80px] h-[50px] flex justify-between items-center border-b-[1px] border-primary">
        <Link href={"/"}>
          <div className="sm:h-[40px] h-[30px] ">
            <Image src={Logo} alt="logo" className="w-full h-full " />
          </div>
        </Link>

        <div className="sm:w-[400px] w-auto sm:h-[35px] h-[30px] rounded-sm overflow-hidden flex ">
          <input
            type="text"
            className="w-[360px] h-full border-none outline-none bg-secondary px-[14px] font-raleWay text-sm 
            placeholderColor text-white sm:block hidden"
            placeholder="Search"
          />

          <button className="sm:w-[40px] w-[30px] h-full flex justify-center items-center bg-primary">
            <RiSearchLine color="white" />
          </button>
        </div>
      </div>
      <input
        type="text"
        className="w-full h-[40px] border-none outline-none bg-secondary px-[14px] font-raleWay text-sm 
            placeholderColor text-white sm:hidden block"
        placeholder="Search"
      />

      <BannerAds />
      <BannerAds />
    </div>
  );
};

export default Navbar;
