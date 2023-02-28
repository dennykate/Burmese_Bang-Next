import axios from "axios";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const { pornstar } = req.body.data;

  const result = await axios.get("https://spankbang.com" + pornstar + "?o=top");
  const $ = cheerio.load(result.data);
  let videos = [];
  let pages = [];

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

    if (parseInt(duration.split("m")[0]) < 5) return;

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

  return res.status(200).json({
    pageCount: pages[pages.length - 2],
    videos,
    link: "https://spankbang.com" + pornstar + "?o=top",
  });
}
