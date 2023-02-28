import { useRouter } from "next/router";

import { useState, useEffect, useRef } from "react";
import {
  Footer,
  Loading,
  Navbar,
  Pagination,
  RecommendedChannels,
  RecommendedPornstars,
  SearchItems,
} from "../components";
import PornstarsContainer from "../components/PornstarsContainer";
import {
  fetchChannels,
  fetchPornstars,
  fetchVideos,
} from "../helper/functions";

export default function Home() {
  const router = useRouter();
  const scrollRef = useRef();
  const [pornstars, setPornstars] = useState([]);
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

  const fetchData = async (page = 1) => {
    setPornstars([]);
    scrollToTop();

    const data = await fetchPornstars(page);

    console.log(data);
    setPornstars(data.pornstars);
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
        {pornstars.length > 0 ? (
          <PornstarsContainer pornstars={pornstars} />
        ) : (
          <Loading />
        )}

        {pageCount && (
          <Pagination
            pageCount={pageCount}
            currentPage={currentPage}
            path="pornstars"
          />
        )}
        <RecommendedChannels />
      </div>
      <Footer />
    </div>
  );
}
