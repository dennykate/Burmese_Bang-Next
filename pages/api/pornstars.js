import axios from "axios";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const { page } = req.body.data;

  const result = await axios.get("https://xgroovy.com/pornstars/" + page);
  const $ = cheerio.load(result.data);
  let pornstars = [];

  $(".item", result.data).each((index, element) => {
    const link = $(element).attr("href");
    const title = $(element).attr("title");
    const thumbnail = $(element).children("div").children("img").attr("src");
    const views = "---";
    const videosCount = $(element)
      .children(".wrap")
      .children(".videos")
      .text()
      .split(" ")[0];

    pornstars.push({ link, title, thumbnail, views, videosCount });
  });

  const pageCount = $(".last").children("a").text();

  return res.status(200).json({ pornstars, pageCount });
}
