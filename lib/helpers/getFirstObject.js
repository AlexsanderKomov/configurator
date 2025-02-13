export function getFirstObject(obj) {
  let firstValues = [];

  for (let item of obj) {
    let firstValue = Object.values(item)[0];
    if (firstValue !== undefined) {
      firstValues.push(firstValue);
    }
  }

  return firstValues;
}
