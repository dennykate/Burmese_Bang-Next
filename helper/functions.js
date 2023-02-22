import axios from "axios";

export const fetchVideos = async (type, page) => {
  const { data } = await axios.post("http://localhost:3000/api/videos", {
    data: {
      type: type + page,
    },
  });

  return data;
};
