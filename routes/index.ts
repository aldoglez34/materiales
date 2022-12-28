import { Router } from "express";
import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";

type requestType = Request<any, any, any, ParsedQs, Record<string, any>>;
type responseType = Response<any, Record<string, any>, number>;

const scrap = async (req: requestType, res: responseType) => {
  res.send({});
};

const router: Router = Router();

router.use("/api", scrap);

export default router;
