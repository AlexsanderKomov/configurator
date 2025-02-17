export function getFirstKey(obj) {
  let firstValues = [];
  for (let item in obj) {
    firstValues.push(item);
  }
  return firstValues;
}
