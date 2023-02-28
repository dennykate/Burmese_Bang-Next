import { useRouter } from "next/router";

import { useState, useEffect, useRef } from "react";
import {
  Cards,
  ChannelCard,
  ChannelsContainer,
  Footer,
  Loading,
  Navbar,
  Pagination,
  RecommendedPornstars,
  SearchItems,
} from "../components";
import { fetchChannels, fetchVideos } from "../helper/functions";

export default function Home() {
  const router = useRouter();
  const scrollRef = useRef();
  const [channels, setChannels] = useState([]);
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

    console.log(process.env.NEXT_APP_BASE_URL);
  }, [router]);

  const fetchData = async (page = 1) => {
    setChannels([]);
    scrollToTop();

    const data = await fetchChannels(page);

    console.log(data);
    setChannels(data.channels);
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
        {channels.length > 0 ? (
          <ChannelsContainer channels={channels} />
        ) : (
          <Loading />
        )}

        {pageCount && (
          <Pagination
            pageCount={pageCount}
            currentPage={currentPage}
            path="channels"
          />
        )}
        <RecommendedPornstars />
      </div>
      <Footer />
    </div>
  );
}
