import { ChangeEvent, FormEvent, useState } from "react";
import * as XLSX from "xlsx";

import { IUseState } from "./interface";

const ReadExcel = () => {
  const [data, setData] = useState<IUseState[]>([]);

  function handleFileReader(e: ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.readFile(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const firstSheet = workbook.Sheets[sheetName];
      const firstSheetData = XLSX.utils.sheet_to_json(firstSheet);

      // console.log(firstSheetData);
      setData(firstSheetData);
    };
    reader.readAsArrayBuffer(e.target[0].files[0]);
  }

  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("File uploaded");
        handleFileReader(e);
        console.log(data);
      }}
    >
      <input type="file" accept=".xls, .xlsx" />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default ReadExcel;
