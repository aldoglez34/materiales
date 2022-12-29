import { useState } from "react";
import ky from "ky";

export const useScrap: any = () => {
  const [title, setTitle] = useState<string>();
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  const scrap = async (
    target: "coel" | "epalma",
    label: string,
    url: string
  ) => {
    setIsLoading(true);
    switch (target) {
      case "coel":
        const coelData = await ky.post("/api/coel", { json: { url } }).json();
        setTitle(`coel | ${label}`);
        setData(coelData);
        setIsLoading(false);
        return;
      case "epalma":
        const epalmaData = await ky
          .post("/api/epalma", { json: { url } })
          .json();
        setTitle(`epalma | ${label}`);
        setData(epalmaData);
        setIsLoading(false);
        return;
      default:
        return () => undefined;
    }
  };

  return { data, isLoading, scrap, title };
};
