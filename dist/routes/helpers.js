"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOtherPages = void 0;
const getOtherPages = (url) => {
    const urls = [];
    [url].forEach((url) => {
        for (let i = 0; i < 15; i++) {
            urls.push(`${url}${i + 1}`);
        }
    });
    return urls;
};
exports.getOtherPages = getOtherPages;
