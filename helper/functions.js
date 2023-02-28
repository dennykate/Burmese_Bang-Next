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

export const fetchChannelVideos = async (id, page) => {
  const { data } = await axios.post(BASE_URL + "/api/channel-videos", {
    data: {
      channel: id + page + "/",
    },
  });

  return data;
};

export const fetchChannels = async (page) => {
  const { data } = await axios.post(BASE_URL + "/api/channels", {
    data: {
      page,
    },
  });

  return data;
};

export const fetchPornstarVideos = async (id, page) => {
  const { data } = await axios.post(BASE_URL + "/api/pornstar-videos", {
    data: {
      pornstar: id + page + "/",
    },
  });

  return data;
};

export const fetchPornstars = async (page) => {
  const { data } = await axios.post(BASE_URL + "/api/pornstars", {
    data: {
      page,
    },
  });

  return data;
};
