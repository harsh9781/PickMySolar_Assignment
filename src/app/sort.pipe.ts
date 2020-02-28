import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {    
    return value.sort((u1,u2)=>{
      return (u1[args]>u2[args])?1:-1
    })
  }

}