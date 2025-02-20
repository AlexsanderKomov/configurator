import * as XLSX from "xlsx";
import { ChangeEvent, useState } from "react";

import { useTypeStore } from "@/components/layout/Main/TypeOfSystems/store";
import { translatetListLoaded } from "@/lib/helpers/translatetListLoaded";
import { validationFileLoaded } from "@/lib/helpers/validationFileLoaded";
import { toast } from "react-toastify";

const ReadExcel = () => {
  const [value, setValue] = useState<string>("");
  const { updateData, loading, startLoading, stopLoading, resetData } =
    useTypeStore((state) => state);

  /** Симулируем загрузку данных */
  function simulateLoading() {
    startLoading();

    setTimeout(() => {
      stopLoading();
    }, 2000);
  }

  function handleFileReader(e: ChangeEvent<HTMLInputElement>) {
    const hasFile = Boolean(e?.target?.files?.[0]);

    if (hasFile) {
      const reader = new FileReader();
      const fileList = e?.target?.files?.[0];

      reader.onloadend = (e) => {
        const data = e?.target?.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const firstSheet = workbook.Sheets[sheetName];
        const firstSheetData =
          XLSX.utils.sheet_to_json<XLSX.WorkSheet>(firstSheet);

        if (validationFileLoaded(firstSheetData)) {
          toast("Вы полностью не заполнили файл!");
          setValue("");
          resetData();
        } else {
          updateData(translatetListLoaded(firstSheetData));
        }
      };
      simulateLoading();

      reader.readAsArrayBuffer(fileList as File);
    }
  }

  return (
    <input
      type="file"
      accept=".xls, .xlsx"
      onChange={handleFileReader}
      disabled={loading}
      value={value}
    />
  );
};

export default ReadExcel;
