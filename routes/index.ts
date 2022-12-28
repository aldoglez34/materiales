import { Router } from "express";
import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";

const router: Router = Router();

type requestType = Request<any, any, any, ParsedQs, Record<string, any>>;
type responseType = Response<any, Record<string, any>, number>;

const scrapCoel = async (req: requestType, res: responseType) => {
  res.send([]);
};

const scrapEpalma = async (req: requestType, res: responseType) => {
  res.send([22222]);
};

router.use("/api/coel", scrapCoel);
router.use("/api/epalma", scrapEpalma);

export default router;
