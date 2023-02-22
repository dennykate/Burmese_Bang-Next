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
  SearchItems,
} from "../../components";
import { fetchSearchVideos } from "../../helper/functions";

export default function Home() {
  const router = useRouter();
  const scrollRef = useRef();
  const [videos, setVidoes] = useState([]);
  const [pageCount, setPageCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const { video, page } = router.query;

    if (video && page) {
      setSearchQuery(video);
      fetchData(video, page);
      setCurrentPage(page);
    } else if (video) {
      setSearchQuery(video);
      fetchData(video, 1);
      setCurrentPage(1);
    }
  }, [router]);

  const fetchData = async (search, page) => {
    setVidoes([]);
    scrollToTop();

    console.log(search, page);

    const data = await fetchSearchVideos(`${search}/`, page);

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
            path={`${searchQuery}`}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}
