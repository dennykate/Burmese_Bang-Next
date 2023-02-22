import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

import Logo from "../assets/logo.png";
import BannerAds from "./BannerAds";

const Navbar = () => {
  const router = useRouter();
  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    if (inputText == "") return;

    router.push(`/search/${inputText.toLowerCase()}`);
    setInputText("");
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };

  return (
    <div className="w-full">
      <div className="w-full px-[12px] sm:h-[80px] h-[60px] flex justify-between items-center border-b-[1px] border-primary">
        <Link href={"/"}>
          <div className="sm:h-[40px] h-[30px] ">
            <Image src={Logo} alt="logo" className="w-full h-full " />
          </div>
        </Link>

        <div className="sm:w-[400px] w-auto sm:h-[35px] h-[30px] rounded-sm overflow-hidden flex ">
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text"
            className="w-[360px] h-full border-none outline-none bg-secondary px-[14px] font-raleWay text-sm 
            placeholderColor text-white sm:block hidden"
            placeholder="Search"
          />

          <button
            onClick={handleClick}
            className="sm:w-[40px] w-[30px] h-full flex justify-center items-center bg-primary"
          >
            <RiSearchLine color="white" />
          </button>
        </div>
      </div>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
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
