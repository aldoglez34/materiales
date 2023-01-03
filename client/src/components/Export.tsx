import { FC } from "react";
import { DataType } from "../types";
import { CSVLink } from "react-csv";

type ExportType = { label: string; fileName: string; data: DataType[] };

export const Export: FC<ExportType> = ({ data, fileName, label }) => {
  const headers = [
    { label: "Nombre", key: "name" },
    { label: "Precio", key: "price" },
    { label: "Link", key: "link" },
  ];

  return (
    <CSVLink
      data={data}
      filename={`${fileName}.csv`}
      headers={headers}
      target="_blank"
      onClick={() => {
        if (!data.length) return null;
        return true;
      }}
    >
      {label}
    </CSVLink>
  );
};
