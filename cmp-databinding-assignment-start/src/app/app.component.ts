import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers=[];
  oddNumbers=[];
  OddNumbers_str="OddNumbers";
  evenNumbers_str="EvenNumbers";
  pushNumber(getNumber:{numb:number}){
    console.log('Number is :' + getNumber.numb);
    if((getNumber.numb%2)==0){
      this.evenNumbers.push(getNumber.numb);
    }else{
      this.oddNumbers.push(getNumber.numb);
    }

  }
}
