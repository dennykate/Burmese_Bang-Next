import axios from "axios";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const { page } = req.body.data;
  const result = await axios.get(`https://xgroovy.com/channels/${page}/`);
  const $ = cheerio.load(result.data);
  let channels = [];

  $(".item", result.data).each((index, element) => {
    const link = $(element).attr("href");
    const title = $(element).attr("title");
    const thumbnail = $(element).children("div").children("img").attr("src");

    channels.push({ link, title, thumbnail });
  });

  const pageCount = $(".last").children("a").text();

  return res.status(200).json({ channels, pageCount });
}
