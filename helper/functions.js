import axios from "axios";

const BASE_URL = process.env.NEXT_APP_BASE_URL;

export const fetchVideos = async (type, page) => {
  const { data } = await axios.post(BASE_URL + "/api/videos", {
    data: {
      type: type + page,
    },
  });

  return data;
};

export const fetchVideo = async (url) => {
  const { data } = await axios.post(BASE_URL + "/api/video", {
    data: {
      url,
    },
  });

  return data;
};

export const fetchSearchVideos = async (search, page) => {
  const { data } = await axios.post(BASE_URL + "/api/search-videos", {
    data: {
      search: search + page + "/",
    },
  });

  return data;
};
