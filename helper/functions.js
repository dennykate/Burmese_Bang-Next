import axios from "axios";

const BASE_URL = process.env.NEXT_APP_BASE_URL;

export const fetchVideos = async (type, page) => {
  const { data } = await axios.post("http://localhost:3000/api/videos", {
    data: {
      type: type + page,
    },
  });

  return data;
};
