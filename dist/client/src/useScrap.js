"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScrap = void 0;
const react_1 = require("react");
const ky_1 = __importDefault(require("ky"));
const useScrap = () => {
    const [title, setTitle] = (0, react_1.useState)();
    const [data, setData] = (0, react_1.useState)([]);
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const scrap = (target, label, url) => __awaiter(void 0, void 0, void 0, function* () {
        setIsLoading(true);
        switch (target) {
            case "coel":
                const coelData = yield ky_1.default.post("/api/coel", { json: { url } }).json();
                setTitle(`coel | ${label}`);
                setData(coelData);
                setIsLoading(false);
                return;
            case "epalma":
                const epalmaData = yield ky_1.default
                    .post("/api/epalma", { json: { url } })
                    .json();
                setTitle(`epalma | ${label}`);
                setData(epalmaData);
                setIsLoading(false);
                return;
            default:
                return () => undefined;
        }
    });
    return { data, isLoading, scrap, title };
};
exports.useScrap = useScrap;
