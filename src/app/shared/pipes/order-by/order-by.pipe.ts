import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(input: any, byProperty: string = 'id', order: string = 'ASC'): any {
    if (input != null && input.length > 0 && Array.isArray(input)) {
      let result = [...input]
      if (order == 'ASC') {
        result.sort((a, b) => (a[byProperty] < b[byProperty] ? -1 : 1))
      } else {
        result.sort((a, b) => (a[byProperty] > b[byProperty] ? -1 : 1))
      }
      return result
    }
    return input
  }
}
