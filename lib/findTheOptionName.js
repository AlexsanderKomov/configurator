import { getFirstObject } from "./getFirstObject";
import { getSecondObject } from "./getSecondObject";

export function findTheOptionName(obj) {
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

  return [getFirstObject(nestedObjects), getSecondObject(nestedObjects)];
}
