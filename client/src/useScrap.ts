import { useState } from "react";
import ky from "ky";

export const useScrap: any = () => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  const scrap = async (target: "coel" | "epalma") => {
    setIsLoading(true);
    switch (target) {
      case "coel":
        const coelData = await ky(target, { prefixUrl: "/api" }).json();
        setData(coelData);
        setIsLoading(false);
        return;
      case "epalma":
        const epalmaData = await ky(target, { prefixUrl: "/api" }).json();
        setData(epalmaData);
        setIsLoading(false);
        return;
      default:
        return () => undefined;
    }
  };

  return { data, scrap, isLoading };
};
