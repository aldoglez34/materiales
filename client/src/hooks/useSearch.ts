import { useEffect, useState } from "react";
import { DataType } from "../types";

export const useSearch = ({
  data = [],
}: {
  data: DataType[];
}): { filteredData: DataType[]; handleSearch: (str: string) => void } => {
  const [filteredData, setFilteredData] = useState<DataType[]>([]);

  useEffect(() => setFilteredData(data), [data]);

  const handleSearch = (str: string = "") => {
    if (str.length >= 2) {
      setFilteredData(
        data.filter(({ name }: { name: string }) =>
          name.toUpperCase().includes(str.toUpperCase())
        )
      );
      return;
    }
    setFilteredData(data);
  };

  return { filteredData, handleSearch };
};
