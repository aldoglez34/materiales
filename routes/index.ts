const cheerio = require("cheerio");
import axios from "axios";
import { Router } from "express";
import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";
import coelUrls from "./constants";

const router: Router = Router();

type requestType = Request<any, any, any, ParsedQs, Record<string, any>>;
type responseType = Response<any, Record<string, any>, number>;

const scrapCoel = async (req: requestType, res: responseType) => {
  const promises = coelUrls.map((url) => axios.get(url));

  const accumulator: any = [];

  for await (const promise of promises) {
    if (!promise?.data) continue;
    const $ = cheerio.load(promise.data);
    const results: any = [];
    $("div.item-box").each((i: any, element: any) => {
      const name = $(element)
        .find(".product-title")
        .children()
        .first()
        .text()
        .trim();
      const price = $(element).find(".price").text().trim();
      results.push({ name, price });
    });
    accumulator.push(...results);
  }

  res.send(accumulator);
};

const scrapEpalma = async (req: requestType, res: responseType) => {
  res.send([22222]);
};

router.use("/api/coel", scrapCoel);
router.use("/api/epalma", scrapEpalma);

export default router;
