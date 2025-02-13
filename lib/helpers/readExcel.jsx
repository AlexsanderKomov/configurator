import * as XLSX from "xlsx";

export const handleFileReader = (e) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    const data = e.target.result;
    const workbook = XLSX.readFile(data, { type: "binary" });
    const sheetName = workbook.SheetNames[0];
    const firstSheet = workbook.Sheets[sheetName];
    const firstSheetData = XLSX.utils.sheet_to_json(firstSheet);

    return firstSheetData;
  };

  reader.readAsArrayBuffer(e.target[0].files[0]);
};
