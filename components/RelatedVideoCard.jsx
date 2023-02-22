import React from "react";
import Image from "next/image";
import Link from "next/link";

const RelatedVideoCard = ({ data }) => {
  const remakeUrl = data?.link.substr(23, data?.link.length);

  return (
    <div className="w-auto sm:min-h-[180px] min-h-[150px] flex flex-col group gap-[5px]">
      <Link href={`video/?id=${remakeUrl}`}>
        <div className="w-full sm:h-[150px] h-[120px] relative">
          <Image
            src={data?.thumbnail}
            className="w-full h-full object-cover"
            width={1080}
            height={720}
          />

          <div className="w-full h-full absolute top-0 opacity-0 group-hover:opacity-100 z-10">
            <video
              src={data?.preview}
              className="w-full h-full object-cover"
              autoPlay
              loop
            ></video>
          </div>
        </div>
      </Link>

      <h1 className="sm:text-sm text-[12px] mt-[5px] font-raleWay text-white truncate">
        {data?.title}
      </h1>

      <h1 className=" font-raleWay sm:text-xs text-[10px] text-gray-400">
        {data?.stats}
      </h1>
    </div>
  );
};

export default RelatedVideoCard;
