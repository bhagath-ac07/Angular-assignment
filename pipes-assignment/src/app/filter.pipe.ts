import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false ///re calculate when list chnages might cause performance issues.
})
export class FilterPipe implements PipeTransform {
  
  transform(value: any, filterName:string, propName:string) {
    const result = [];
    console.log(filterName)
    if (value.length === 0 || filterName === ''){
      return value;
    }
    for(const item of value){
      if(item[propName]==filterName){
        result.push(item);
      }
    }
    return result;
  }

}