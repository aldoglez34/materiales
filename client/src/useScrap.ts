import ky from "ky";

export const useScrap = async () => {
  const coelData = await ky("coel", { prefixUrl: "/api" });

  console.log({ coelData });

  // return { coelData };
};

useScrap();
