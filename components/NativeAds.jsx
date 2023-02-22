import Image from "next/image";
import Link from "next/link";
import React from "react";

const NativeAds = () => {
  return (
    <div className="max-w-[300px] mx-auto border-[0.5px] border-gray-600">
      <Link href="">
        <Image
          src={"https://i.postimg.cc/X7rWpGz2/giphy.gif"}
          width={300}
          height={1}
          className="w-full h-full"
          alt="ads"
        />
      </Link>
    </div>
  );
};

export default NativeAds;
