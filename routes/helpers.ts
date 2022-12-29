export const getOtherPages = (url: string) => {
  const urls: string[] = [];
  [url].forEach((url) => {
    for (let i = 0; i < 15; i++) {
      urls.push(`${url}${i + 1}`);
    }
  });
  return urls;
};
