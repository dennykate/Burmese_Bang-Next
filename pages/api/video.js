import axios from "axios";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const url = "https://spankbang.com/" + req.body.data.url;

  const result = await axios.get(url);
  const $ = cheerio.load(result.data);

  const videoTitle = $(".left>h1").text();
  const videoUrl = $("source").attr("src");
  const videoThumbnail = $(".player_thumb").attr("data-src");
  const popularity = $(".i-plays").text();
  const duration = $(".hd-time").children(".i-length").text();
  const rate = $(".rate").text();
  const video = {
    title: videoTitle,
    url: videoUrl,
    thumbnail: videoThumbnail,
    popularity,
    duration,
    rate,
  };

  let relatedVideos = [];
  const photos = [];

  $(".video-item", result.data).each((idx, element) => {
    if ($(element).children(".n").attr("href") == undefined) return;
    if ($(element).children("a").attr("href") == undefined) return;

    const link =
      "https://spankbang.com/" + $(element).children(".n").attr("href");
    const title = $(element).children(".n").text();
    const thumbnail = $(element)
      .children("a")
      .children("picture")
      .children("img")
      .attr("data-src");
    const preview = $(element)
      .children("a")
      .children("picture")
      .children("img")
      .attr("data-preview");
    const duration = $(element)
      .children("a")
      .children("p")
      .children(".l")
      .text();
    const resolution = $(element)
      .children("a")
      .children("p")
      .children(".h")
      .text();

    const stats = $(element).children(".stats").children(".v").text();

    relatedVideos.push({
      link,
      title,
      thumbnail,
      preview,
      duration,
      resolution,
      stats,
    });
  });

  $(".timeline>div", result.data).each((index, element) => {
    const photo = $(element).children("span").children("img").attr("data-src");
    const time = $(element).children("strong").text();

    photos.push({ photo, time });
  });

  video.photos = photos;

  return res.status(200).json({ video, relatedVideos });
}
