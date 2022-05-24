export function orderBy(input: any, byProperty: string): any {
  if (input != null && input.length > 0 && Array.isArray(input)) {
    let result = [...input]
    result.sort((a, b) => (a[byProperty] < b[byProperty] ? -1 : 1))
    return result
  }
  return []
}
