import { reverse } from 'dns';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const sortArray=[];
    const retArray = [];
    for(const val in value){
      console.log(value[val].started)
      sortArray.push(value[val].name);
    }
    sortArray.sort();
    for(const val of sortArray){
      for(const index in value){
        if(value[index].name === val){
          retArray.push(value[index])
        }
      }
    }
    return retArray;
  }

}
