export function transformValue(value: string): boolean {
  let result = false;

  if (value === "Нет") {
    result = false;
  } else if (value === "Да") {
    result = true;
  }

  return result;
}
