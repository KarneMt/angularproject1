import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simpleOrderBy'
})
export class SimpleOrderByPipe implements PipeTransform {
  transform(input: any, property: string[], order: string = 'ASC'): any {
    let result = [...input]
    if (order == 'ASC') {
      result.sort((a, b) => {
        console.log(`vergleich: ${a.group},${a.value} - ${b.group},${b.value}`)
        switch (true) {
          case a[property[0]] < b[property[0]]:
            console.log('a>b')
            return -1
            break

          case a[property[0]] > b[property[0]]:
            console.log('a<b')
            return 0

          // case a[property[0]] = b[property[0]]:
          //   return 0
          //   break
          
          default:
            console.log('gleich')
            if (order == 'ASC') {
              return (a[property[1]] < b[property[1]] ? -1 : 1)
            } else {
              return (a[property[1]] > b[property[1]] ? -1 : 1)
            }              
            // return 1
        }
      })
    } else {
      // DESC
      result.sort((a, b) => {
        console.log(`vergleich: ${a.group},${a.value} - ${b.group},${b.value}`)
        switch (true) {
          case a[property[0]] > b[property[0]]:
            console.log('a>b')
            return -1
            break

          case a[property[0]] < b[property[0]]:
            console.log('a<b')
            return 0

          // case a[property[0]] = b[property[0]]:
          //   return 0
          //   break
          
          default:
            console.log('gleich')
            if (order == 'ASC') {
              return (a[property[1]] < b[property[1]] ? -1 : 1)
            } else {
              return (a[property[1]] > b[property[1]] ? -1 : 1)
            }              
            // return 1
        }
      })
    }
    return result
  }
}
