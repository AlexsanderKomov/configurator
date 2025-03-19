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
    return data.filter(
      (item) =>
        item.manufacturer === lastHistoryEntry.selectedValue?.manufacturer &&
        item.video_signal_format ===
          lastHistoryEntry.selectedValue?.video_signal_format
    );
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
