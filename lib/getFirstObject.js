export function getFirstObject(arr) {
  let firstValues = [];

  for (let obj of arr) {
    let firstValue = Object.values(obj)[0];
    if (firstValue !== undefined) {
      firstValues.push(firstValue);
    }
  }

  return firstValues;
}
