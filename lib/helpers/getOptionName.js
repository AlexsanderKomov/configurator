import { getFirstObject } from "./getFirstObject";
import { getSecondObject } from "./getSecondObject";
import { getFirstKey } from "./getFirstKey";

export function getOptionName(obj) {
  let nestedObjects = [];
  for (let [, value] of Object.entries(obj)) {
    if (
      typeof value === "object" &&
      value !== null &&
      Object.values(value).length > 0
    ) {
      nestedObjects.push(value);
    }
  }
  return [
    getFirstObject(nestedObjects),
    getSecondObject(nestedObjects),
    getFirstKey(obj),
  ];
}
