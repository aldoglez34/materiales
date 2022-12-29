const cheerio = require("cheerio");
import axios from "axios";
import { Router } from "express";
import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { getOtherPages } from "./helpers";

const router: Router = Router();

type RequestType = Request<any, any, any, ParsedQs, Record<string, any>>;
type ResponseType = Response<any, Record<string, any>, number>;
type CoelType = {
  link: string;
  name: string;
  price: string;
};

const scrapCoel = async (req: RequestType, res: ResponseType) => {
  const urls = getOtherPages(req.body.url);
  const promises = urls.map((url) => axios.get(url));

  const accumulator: CoelType[] = [];
  for await (const promise of promises) {
    const $ = cheerio.load(promise.data);
    const isEmpty = !!$("div.no-result").text().trim();
    if (isEmpty) continue;
    const results: CoelType[] = [];
    $("div.item-box").each((i: any, element: any) => {
      const name: string = $(element)
        .find(".product-title")
        .children()
        .first()
        .text()
        .trim();
      const link: string = $(element)
        .find(".product-title")
        .children()
        .first()
        .attr("href");
      const price: string = $(element).find(".price").text().trim();
      results.push({ link: `https://coel.com.mx${link}`, name, price });
    });
    accumulator.push(...results);
  }

  res.send(accumulator);
};

router.post("/api/coel", scrapCoel);

export default router;
