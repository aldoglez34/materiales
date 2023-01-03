import { useState } from "react";
import ky from "ky";
import { Commerce, DataType } from "../types";

export const useScrap = (): {
  data: DataType[];
  isLoading: boolean;
  scrap: (target: Commerce, url: string) => void;
} => {
  const [data, setData] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const scrap = async (target: Commerce, url: string) => {
    setIsLoading(true);
    switch (target) {
      case "coel":
        const coelData: DataType[] = await ky
          .post("/api/coel", { json: { url } })
          .json();
        setData(coelData);
        setIsLoading(false);
        return;
      default:
        return () => undefined;
    }
  };

  return { data, isLoading, scrap };
};
