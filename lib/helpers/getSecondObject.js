export function getSecondObject(arr) {
  let secondValues = [];

  for (let obj of arr) {
    let secondValue = Object.values(obj)[1];
    if (secondValue !== undefined) {
      secondValues.push(secondValue);
    }
  }

  return secondValues;
}
