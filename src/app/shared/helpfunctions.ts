export function checkStateForEmptyArrays(value: any): any[] {
  if (Array(value)) {
    return value
  } else {
    return []
  }
}
