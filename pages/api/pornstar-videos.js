import axios from "axios";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const { pornstar } = req.body.data;

  const result = await axios.get("https://xgroovy.com/pornstars/" + pornstar);
  const $ = cheerio.load(result.data);
  let videos = [];

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
      .children(".is-hd")
      .text();
    const preview = "";

    if (duration !== "") {
      videos.push({
        title,
        link,
        thumbnail,
        duration,
        resolution,
        stats,
        preview,
      });
    }
  });

  const pageCount = $(".last").children("a").text();

  console.log({ pageCount, videos });

  return res.status(200).json({ pageCount, videos });
}
