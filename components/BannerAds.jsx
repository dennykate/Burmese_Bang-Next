import Image from "next/image";
import Link from "next/link";
import React from "react";

const BannerAds = () => {
  return (
    <div className=" max-w-[768px] mx-auto mb-[5px] border-[1px] border-gray-700">
      <Link href="">
        <Image
          src={
            "https://channelmyanmar.org/wp-content/uploads/2023/02/club388-2.gif"
          }
          width={768}
          height={100}
          alt="ads"
        />
      </Link>
    </div>
  );
};

export default BannerAds;
