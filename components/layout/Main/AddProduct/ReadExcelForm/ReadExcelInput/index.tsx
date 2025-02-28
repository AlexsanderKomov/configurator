"use client";

import * as XLSX from "xlsx";
import ExcelJS from "exceljs";
import { ChangeEvent, useState } from "react";

import { useTypeStore } from "@/components/layout/Main/AddProduct/TypeOfSystems/store";
import { transformListLoaded } from "@/lib/helpers/transformListLoaded";
import { validationFileLoaded } from "@/lib/helpers/validationFileLoaded";
import { uploadImageToServer } from "@/lib/helpers/uploadImageToServer";
import { base64ToBlob } from "@/lib/helpers/base64ToBlob";
import { errorLoadingFile } from "@/lib/helpers/errorLoadingFile";

export interface IExcelImage {
  cellAddress: string; // Адрес ячейки
  base64: string; // Изображение в base64
}

const ReadExcelInput = () => {
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

  const extractImagesFromExcel = async (file: File): Promise<string[]> => {
    const workbook = new ExcelJS.Workbook();
    const reader = new FileReader();

    return new Promise<string[]>((resolve, reject) => {
      reader.onload = async (e) => {
        try {
          const buffer = e.target?.result as ArrayBuffer;
          await workbook.xlsx.load(buffer);

          const images: string[] = [];

          workbook.eachSheet((sheet) => {
            sheet.getImages().forEach((image) => {
              const imageId = parseInt(image.imageId, 10);
              if (!isNaN(imageId)) {
                const imageFile = workbook.getImage(imageId);

                if (imageFile && imageFile.buffer) {
                  const base64 = Buffer.from(imageFile.buffer).toString(
                    "base64"
                  );
                  images.push(`data:image/png;base64,${base64}`);
                }
              }
            });
          });

          resolve(images);
        } catch (error) {
          console.error("Ошибка при извлечении изображений:", error);
          reject(error);
        }
      };

      reader.onerror = () => {
        reject(new Error("Ошибка при чтении файла"));
      };

      reader.readAsArrayBuffer(file);
    });
  };

  const handleFileReader = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    if (!file) return;

    setValue("");

    try {
      const data = await readFileAsArrayBuffer(file);
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const firstSheet = workbook.Sheets[sheetName];
      const firstSheetData =
        XLSX.utils.sheet_to_json<XLSX.WorkSheet>(firstSheet);

      if (validationFileLoaded(firstSheetData)) {
        errorLoadingFile();
        resetData();
      } else {
        const images = await extractImagesFromExcel(file);

        // Преобразуем base64 в Blob
        const blobs = images.map((base64) => base64ToBlob(base64, "image/png"));

        // Отправляем Blob на сервер
        const imageUrls = await Promise.all(blobs.map(uploadImageToServer));

        const data = transformListLoaded(firstSheetData, imageUrls);
        console.log(firstSheetData);
        updateData(data);

        // const response = await fetch('')
      }
    } catch (error) {
      console.error("Ошибка при чтении файла:", error);
      errorLoadingFile();
      resetData();
    } finally {
      stopLoading();
    }

    simulateLoading();
  };

  const readFileAsArrayBuffer = (file: File): Promise<ArrayBuffer> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as ArrayBuffer);
      reader.onerror = () => reject(reader.error);
      reader.readAsArrayBuffer(file);
    });
  };

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

export default ReadExcelInput;
