"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const response_time_1 = __importDefault(require("response-time"));
const errorhandler_1 = __importDefault(require("errorhandler"));
const dotenv_1 = require("dotenv");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
(0, dotenv_1.config)();
// middleware
app.use((0, morgan_1.default)("dev"));
app.use((0, response_time_1.default)());
app.use(body_parser_1.default.json({ limit: "50mb" }));
app.use(body_parser_1.default.urlencoded({ limit: "50mb", extended: true }));
if (process.env.NODE_ENV === "development")
    app.use((0, errorhandler_1.default)());
if (process.env.NODE_ENV === "production")
    app.use(express_1.default.static("client/build"));
// API routes
app.use(routes_1.default);
// send every other request to the React app
// define any API routes before this runs
app.get("*", (req, res) => res.sendFile(path_1.default.join(__dirname, "./client/build/index.html")));
// start server
app.listen(PORT, () => console.log(`\n\n🌎 ==> API server listening on port ${PORT}!`));
