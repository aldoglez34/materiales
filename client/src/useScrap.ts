import ky from "ky";

export const useScrap = async () => {
  const scrap = () => undefined;

  const coelData = await ky("coel", { prefixUrl: "/api" });

  return { coelData };
};
