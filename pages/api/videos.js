import axios from "axios";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const videoType = req.body.data.type;
  const result = await axios.get("https://spankbang.com/" + videoType);
  const $ = cheerio.load(result.data);
  const videos = [];
  const pages = [];

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

    videos.push({
      link,
      title,
      thumbnail,
      preview,
      duration,
      resolution,
      stats,
    });
  });
  $(".pagination>ul>li", result.data).each((index, element) => {
    const page = $(element).children("a").text();

    pages.push(page);
  });

  return res.status(200).json({ pageCount: pages[pages.length - 2], videos });
}