import { MONITOR } from "@/shared/constants/select_options/monitor/index";

export function translatetListLoaded(arr) {
  return arr.map((item) => {
    const newItem = {};
    // key русское значение из таблицы
    Object.keys(item).forEach((key) => {
      for (let monitorKey in MONITOR) {
        if (MONITOR[monitorKey][monitorKey] === key) {
          newItem[monitorKey] = {
            [monitorKey]: key,
            option: {
              value: item[key],
              label: item[key],
            },
          };
        }
      }
    });
    console.log(newItem);
    return newItem;
  });
}
