import axios from "axios";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const result = await axios.get(
    "https://xgroovy.com/videos/233435/fucking-perfect-babe-on-a-sun-shiny-day-outdoors/"
  );
  const $ = cheerio.load(result.data);

  const video = $("source").attr("src");

  return res.status(200).json({ video });
}
