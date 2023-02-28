import React from "react";
import Link from "next/link";
import Image from "next/image";

const ChannelCard = ({ data }) => {
  return (
    <Link
      href={`/channel?id=${data?.link}`}
      target="_blank"
      className=" sm:mb-0 mb-[10px]"
    >
      <div className="w-full rounded-md overflow-hidden border-[1px] border-gray-900">
        <Image
          src={data?.thumbnail}
          alt="channel-logo"
          width={1024}
          height={1024}
          className="w-full"
        />
      </div>
      <h1 className=" font-raleWay text-[10px] font-semibold text-white truncate px-[1px] text-center">
        {data?.title}
      </h1>
    </Link>
  );
};

export default ChannelCard;
