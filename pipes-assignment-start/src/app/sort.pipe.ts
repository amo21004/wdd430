import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): string {
    return value.sort((a, b) => {
      if(a[propName] > [propName]) {
        return 1;
      }
      else {
        return -1;
      }
    });
  }

}
