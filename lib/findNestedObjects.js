import { getFirstObject } from "./getFirstObject";

export function findNestedObjects(obj) {
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

  return getFirstObject(nestedObjects);
}
