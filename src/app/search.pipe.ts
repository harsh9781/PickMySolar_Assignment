import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args==''||args==null){return value}
    return value.filter((u)=>{
      var s = JSON.stringify(u);
      return s.indexOf(args)>-1?true:false;
    })
  }
}
