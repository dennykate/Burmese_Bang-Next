import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ data }) => {
  const remakeUrl = data?.link.substr(23, data?.link.length);

  return (
    <div className="w-auto sm:min-h-[180px] min-h-[150px] flex flex-col group gap-[5px]">
      <Link href={`/video/?id=${remakeUrl}`}>
        <div className="w-full sm:h-[150px] h-[120px] relative">
          <Image
            // src={data?.thumbnail}
            src={"https://i.postimg.cc/bNPXbc0F/pexels-photo-6195084.jpg"}
            className="w-full h-full object-cover"
            width={1080}
            height={720}
            alt="thumbnail"
          />

          <div className="px-[5px] py-[3px] absolute left-0 bottom-0 flex gap-[3px]">
            <h1
              className="sm:text-[10px] text-[8px] font-semibold font-mono text-white px-[8px] py-[2px] bg-black 
            bg-opacity-70 rounded-md"
            >
              {data?.duration}
            </h1>

            <h1
              className="sm:text-[10px] text-[8px] font-semibold font-mono text-white px-[8px] py-[2px] bg-black 
            bg-opacity-70 rounded-md"
            >
              {data?.resolution}
            </h1>
          </div>
        </div>
      </Link>

      <h1 className="sm:text-sm text-[12px] sm:mt-[5px] mt-[2px] font-raleWay text-white truncate">
        {data?.title}
      </h1>

      <h1 className=" font-raleWay sm:text-xs text-[10px] text-gray-400">
        {data?.stats}
      </h1>
    </div>
  );
};

export default Card;
