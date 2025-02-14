import * as XLSX from "xlsx";
import { ChangeEvent } from "react";

import { useTypeStore } from "@/components/layout/Main/TypeOfSystems/store";
import { useListLoadedProducts } from "@/components/layout/Main/ListLoadedProducts/store";
import { translatetListLoaded } from "@/lib/helpers/translatetListLoaded";

const ReadExcel = () => {
  const updateData = useTypeStore((state) => state.updateData);
  const updateHide = useListLoadedProducts((state) => state.updateHide);

  function handleFileReader(e: ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader();

    reader.onloadend = (e) => {
      const data = e.target.result;
      const workbook = XLSX.readFile(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const firstSheet = workbook.Sheets[sheetName];
      const firstSheetData = XLSX.utils.sheet_to_json(firstSheet);

      updateHide(true);
      updateData(translatetListLoaded(firstSheetData));
    };
    reader.readAsArrayBuffer(e.target.files[0]);
  }

  return <input type="file" accept=".xls, .xlsx" onChange={handleFileReader} />;
};

export default ReadExcel;
