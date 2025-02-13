export function getFirstKey(obj) {
  let firstValues = [];

  for (let item of obj) {
    let firstValue = Object.keys(item)[0];
    if (firstValue !== undefined) {
      firstValues.push(firstValue);
    }
  }

  return firstValues;
}
