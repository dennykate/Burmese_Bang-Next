import axios from "axios";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const { page } = req.body.data;

  const result = await axios.get("https://spankbang.com/pornstars/" + page);
  const $ = cheerio.load(result.data);
  let pornstars = [];
  let pages = [];

  $(".results>li", result.data).each((index, element) => {
    const link = $(element).children("a").attr("href");
    const title = $(element).children("a").children("img").attr("title");
    const thumbnail =
      "https:" + $(element).children("a").children("img").attr("src");
    const views = $(element).children("a").children(".views").text();
    const videosCount = $(element).children("a").children(".videos").text();

    pornstars.push({ link, title, thumbnail, views, videosCount });
  });

  $(".pagination>ul>li", result.data).each((index, element) => {
    const page = $(element).children("a").text();

    pages.push(page);
  });

  return res
    .status(200)
    .json({ pageCount: pages[pages.length - 2], pornstars });
}
