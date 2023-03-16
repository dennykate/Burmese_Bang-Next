import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { useState, useEffect, useRef } from "react";
import {
  Cards,
  Footer,
  Loading,
  Navbar,
  Pagination,
  RecommendedChannels,
  RecommendedPornstars,
  SearchItems,
} from "../components";
import { fetchChannelVideos } from "../helper/functions";

export default function Home() {
  const router = useRouter();
  const scrollRef = useRef();
  const [videos, setVidoes] = useState([]);
  const [pageCount, setPageCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [channelQuery, setChannelQuery] = useState("");

  useEffect(() => {
    const { page, id } = router.query;

    if (page && id) {
      setChannelQuery(id);
      fetchData(id, page);
      setCurrentPage(page);
    } else if (id) {
      setChannelQuery(id);
      fetchData(id);
      setCurrentPage(1);
    }
  }, [router]);

  const fetchData = async (id, page = 1) => {
    setVidoes([]);
    scrollToTop();

    const data = await fetchChannelVideos(id, page);

    console.log(data);
    setVidoes(data.videos);
    setPageCount(data.pageCount);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-screen min-h-screen bg-black ">
      <div className="max-w-[1024px] mx-auto ">
        <Navbar />
        <SearchItems />
        {videos.length > 0 ? (
          <Cards videos={videos} myRef={scrollRef} />
        ) : (
          <Loading />
        )}

        {pageCount && (
          <Pagination
            pageCount={pageCount}
            currentPage={currentPage}
            path={`channel?id=${channelQuery}`}
            isQueries
          />
        )}

        {/* <RecommendedPornstars /> */}
      </div>
      <Footer />
    </div>
  );
}
