import { reverse } from 'dns';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string){
     var revStr='';
     var index= value.length;
    while(index!=0){
      revStr=revStr+value.substring(index,index-1);
      index--;
    }
    return revStr;
  }

}
