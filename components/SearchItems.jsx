import React from "react";
import {
  searchChannelsData,
  searchPornstarsData,
  searchVideosData,
} from "../utils/data";
import SearchItem from "./SearchItem";

const SearchItems = () => {
  return (
    <div className="pt-[10px] sm:pb-[24px] pb-[18px] w-full flex justify-center items-center">
      <div className=" flex items-center sm:gap-[50px] gap-[10px]">
        <SearchItem title="Videos" data={searchVideosData} />
        <SearchItem title="Channels" data={searchChannelsData} />
        <SearchItem title="Pornstars" data={searchPornstarsData} />
      </div>
    </div>
  );
};

export default SearchItems;
