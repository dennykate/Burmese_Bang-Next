import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Footer,
  Loading,
  Navbar,
  RelatedVideos,
  VideoContainer,
} from "../components";
import { fetchVideo } from "../helper/functions";
import { fakeData } from "../utils/data";

export default function Video() {
  const router = useRouter();

  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      console.log(id);
      setVideoData(null);
      fetchData(id);
    }
  }, [router]);

  const fetchData = async (url) => {
    const data = await fetchVideo(url);

    console.log(data);
    setVideoData(data);
  };

  return (
    <div className="w-screen min-h-screen bg-black ">
      <div className="max-w-[1024px] mx-auto ">
        <Navbar />
        {videoData ? <VideoContainer data={videoData} /> : <Loading />}
        {videoData && <RelatedVideos relatedVideos={videoData.relatedVideos} />}
      </div>
      <Footer />
    </div>
  );
}
