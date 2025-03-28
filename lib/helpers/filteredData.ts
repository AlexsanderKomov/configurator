import { IData, ISelectedValue } from "@/components/configurator/store";

interface IFilteredData {
  data: IData[];
  history: { selectedOption: string; selectedValue: ISelectedValue | null }[];
}

export function filteredData({ data, history }: IFilteredData) {
  // Берем последний элемент из истории
  const lastHistoryEntry = history[history.length - 1];

  if (
    lastHistoryEntry.selectedValue?.manufacturer &&
    lastHistoryEntry.selectedValue?.video_signal_format &&
    lastHistoryEntry.selectedOption === "individually"
  ) {
    return data.filter((item) => {
      const isManufacturerMatch =
        item.manufacturer === lastHistoryEntry.selectedValue?.manufacturer;

      // Получаем видеоформат из выбранного значения (может быть строкой через запятую)
      const selectedVideoFormat =
        lastHistoryEntry.selectedValue?.video_signal_format;

      // Преобразуем строку в массив (если это строка), иначе оставляем как есть (если уже массив)
      const selectedFormats =
        typeof selectedVideoFormat === "string"
          ? selectedVideoFormat.split(",").map((s) => s.trim()) // Разделяем по запятой и убираем пробелы
          : Array.isArray(selectedVideoFormat)
          ? selectedVideoFormat
          : [];

      // Получаем видеоформат из текущего элемента (может быть строкой или массивом)
      const itemVideoFormat = item.video_signal_format;
      const itemFormats = Array.isArray(itemVideoFormat)
        ? itemVideoFormat
        : [itemVideoFormat]; // Если строка, превращаем в массив с одним элементом

      // Проверяем, есть ли хотя бы одно совпадение
      const hasFormatMatch = selectedFormats.some((format) =>
        itemFormats.includes(format)
      );

      return isManufacturerMatch && hasFormatMatch;
    });
  } else if (
    (lastHistoryEntry.selectedOption === "electromagnetic_lock" ||
      lastHistoryEntry.selectedOption === "electromechanical_lock") &&
    data[0].type_equipment === "lock"
  ) {
    return data.filter(
      (item) => item.type_lock === lastHistoryEntry.selectedOption
    );
  } else if (lastHistoryEntry.selectedOption === "electromechanical_lock") {
    return data.filter((item) => +item.output_current >= 5);
  } else {
    return data;
  }
}
