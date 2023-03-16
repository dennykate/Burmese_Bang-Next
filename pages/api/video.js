import axios from "axios";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const result = await axios.get(
    "https://xgroovy.com/videos/" + req.body.data.url
  );
  const $ = cheerio.load(result.data);

  const title = $(".page-title").children("h1").text();
  const duration = $(".page-title").children(".duration").text();
  const url = $("source").attr("src");
  const thumbnail = $(".fluid_pseudo_poster").attr("style");
  const popularity = $(".page-title").children(".views").text();
  const rate = $(".rate-like").children("span").text();
  let relatedVideos = [];

  const video = {
    title,
    url,
    duration,
    thumbnail,
    popularity,
    rate,
  };

  $(".item", result.data).each((index, element) => {
    const title = $(element)
      .children("a")
      .children("div")
      .children("img")
      .attr("alt");
    const link = $(element).children("a").attr("href");
    const thumbnail = $(element)
      .children("a")
      .children("div")
      .children("img")
      .attr("src");
    const duration = $(element).children(".wrap").children(".duration").text();
    const stats = $(element).children(".wrap").children(".views").text();
    const resolution = $(element)
      .children("a")
      .children("div")
      .children("span")
      .children("span")
      .text();
    const preview = "";

    if (title !== undefined)
      relatedVideos.push({
        title,
        link,
        thumbnail,
        duration,
        resolution,
        stats,
        preview,
      });
  });

  video.photos = [];

  return res.status(200).json({ video, relatedVideos });
}
