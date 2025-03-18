import { IData, ISelectedValue } from "@/components/configurator/store";

interface IFilteredData {
  data: IData[];
  selectedValue: ISelectedValue;
  selectedOption: string | boolean;
}

export function filteredData({
  data,
  selectedValue,
  selectedOption,
}: IFilteredData) {
  if (
    selectedValue.manufacturer &&
    selectedValue.video_signal_format &&
    selectedOption === "individually"
  ) {
    return data.filter(
      (item) =>
        item.manufacturer === selectedValue.manufacturer &&
        item.video_signal_format === selectedValue.video_signal_format
    );
  } else if (
    selectedOption === "electromagnetic_lock" ||
    selectedOption === "electromechanical_lock"
  ) {
    return data.filter((item) => item.type_lock === selectedOption);
  } else {
    return data;
  }
}
