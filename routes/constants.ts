const coelUrls: string[] = [];

[
  "https://coel.com.mx/sp/iluminacion?pagenumber=",
  "https://coel.com.mx/sp/cables?pagenumber=",
  "https://coel.com.mx/sp/tuberia?pagenumber=",
  "https://coel.com.mx/sp/material-electrico?pagenumber=",
  "https://coel.com.mx/sp/control-y-distribucion?pagenumber=",
].forEach((url) => {
  for (let i = 0; i < 15; i++) {
    coelUrls.push(`${url}${i + 1}`);
  }
});

export default coelUrls;
