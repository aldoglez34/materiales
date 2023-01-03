import express, { Express, Request, Response } from "express";
import path from "path";
import morgan from "morgan";
import routes from "./routes";
import bodyParser from "body-parser";
import errorhandler from "errorhandler";
import { config as dotenvConfig } from "dotenv";

const app: Express = express();
const PORT = process.env.PORT || 3001;

dotenvConfig();

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
if (process.env.NODE_ENV === "development") app.use(errorhandler());
if (process.env.NODE_ENV === "production")
  app.use(express.static("client/build"));

// API routes
app.use(routes);

// send every other request to the React app
// define any API routes before this runs
app.get("*", (req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
);

// start server
app.listen(PORT, () =>
  console.log(`\n\n🌎 ==> API server listening on port ${PORT}!`)
);
