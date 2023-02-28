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
import { fetchVideos } from "../helper/functions";

export default function Home() {
  const router = useRouter();
  const scrollRef = useRef();
  const [videos, setVidoes] = useState([]);
  const [pageCount, setPageCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const page = router.query.page;

    if (page) {
      fetchData(page);
      setCurrentPage(page);
    } else {
      fetchData(1);
    }
  }, [router]);

  const fetchData = async (page) => {
    setVidoes([]);
    scrollToTop();

    const data = await fetchVideos("trending_videos/", page);

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
            path="trending_videos"
          />
        )}

        <RecommendedChannels />
        <RecommendedPornstars />
      </div>
      <Footer />
    </div>
  );
}
