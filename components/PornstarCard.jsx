import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiCameraMovie } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

const PornstarCard = ({ data }) => {
  return (
    <Link
      href={`/pornstar?id=${data?.link}`}
      target="_blank"
      className=" sm:mb-0 mb-[10px]"
    >
      <div className="w-full rounded-md overflow-hidden border-[1px] border-gray-900 relative">
        <Image
          src={data?.thumbnail}
          alt="channel-logo"
          width={1024}
          height={1024}
          className="w-full mb-[5px]"
        />
        <div className=" absolute bottom-[5px] w-full p-[3px] flex flex-col items-start gap-[2px]">
          <div className="p-[3px] bg-gray-800 bg-opacity-70 flex items-center gap-[2px] rounded">
            <AiOutlineEye color="white" size={12} />
            <h1 className="sm:text-[10px] text-[8px] text-white font-raleWay">
              {data?.views}
            </h1>
          </div>
          <div className="p-[3px] bg-gray-800 bg-opacity-70 flex items-center gap-[2px] rounded">
            <BiCameraMovie color="white" size={12} />
            <h1 className="sm:text-[10px] text-[8px] text-white font-raleWay">
              {data?.videosCount}
            </h1>
          </div>
        </div>
      </div>
      <h1 className=" font-raleWay sm:text-[10px] text-[14px] font-semibold text-white truncate px-[1px] text-center">
        {data?.title}
      </h1>
    </Link>
  );
};

export default PornstarCard;
