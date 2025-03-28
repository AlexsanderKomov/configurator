"use client";

import * as XLSX from "xlsx";
import ExcelJS from "exceljs";
import { ChangeEvent, useState } from "react";
import { error } from "@/lib/helpers/toastifyFunctions";
import { transformationOfProductThroughExcel } from "@/lib/helpers/transformationOfProductThroughExcel";
import { transformListLoaded } from "@/lib/helpers/transformListLoaded";
import { uploadImageToServer } from "@/lib/helpers/uploadImageToServer";
import { base64ToBlob } from "@/lib/helpers/base64ToBlob";
import { validationFileLoaded } from "@/lib/helpers/validationFileLoaded";
import { useTypeStore } from "../../store";
import { IArrayTranslate } from "@/lib/helpers/interface";
// ... другие импорты

const ReadExcelInput = () => {
  const [value, setValue] = useState<string>("");
  const {
    updateData,
    loading,
    startLoading,
    stopLoading,
    resetData,
    updateDataExcel,
  } = useTypeStore((state) => state);

  const extractImagesFromExcel = async (file: File): Promise<string[]> => {
    const workbook = new ExcelJS.Workbook();
    const buffer = await file.arrayBuffer();

    try {
      await workbook.xlsx.load(buffer);
      const images: string[] = [];

      workbook.eachSheet((sheet) => {
        sheet.getImages().forEach((image) => {
          const imageId = parseInt(image.imageId, 10);
          if (!isNaN(imageId)) {
            const imageFile = workbook.getImage(imageId);
            if (imageFile?.buffer) {
              // Исправленный способ конвертации в base64 для браузера
              const base64 = btoa(
                String.fromCharCode(...new Uint8Array(imageFile.buffer))
              );
              images.push(`data:image/png;base64,${base64}`);
            }
          }
        });
      });

      return images;
    } catch (err) {
      console.error("Ошибка при извлечении изображений:", err);
      throw err;
    }
  };

  const handleFileReader = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setValue("");
    startLoading();

    try {
      // 1. Чтение данных Excel
      const buffer = await file.arrayBuffer();
      const workbook = XLSX.read(buffer, { type: "array" }); // Исправлено на "array"

      const sheetName = workbook.SheetNames[0];
      const firstSheet = workbook.Sheets[sheetName];
      const firstSheetData =
        XLSX.utils.sheet_to_json<IArrayTranslate>(firstSheet); // Используйте конкретный интерфейс вместо any

      if (validationFileLoaded(firstSheetData)) {
        error("Вы не заполнили файл полностью!");
        resetData();
        return;
      }

      // 2. Извлечение изображений
      const images = await extractImagesFromExcel(file);
      const blobs = images.map((base64) => base64ToBlob(base64, "image/png"));
      const imageUrls = await Promise.all(blobs.map(uploadImageToServer));

      // 3. Обновление состояния
      const transformedData = transformListLoaded(firstSheetData, imageUrls);
      updateDataExcel(
        transformationOfProductThroughExcel(firstSheetData, imageUrls)
      );
      updateData(transformedData);
    } catch (err) {
      console.error("Ошибка при обработке файла:", err);
      error("Ошибка при обработке Excel-файла");
      resetData();
    } finally {
      stopLoading();
    }
  };

  return (
    <input
      type="file"
      accept=".xlsx, .xls"
      onChange={handleFileReader}
      disabled={loading}
      value={value}
    />
  );
};

export default ReadExcelInput;
