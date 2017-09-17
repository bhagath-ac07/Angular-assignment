import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  private toggle:boolean;
  number:number;
  private myvar;
  @Output() getNumber = new EventEmitter<{numb:number}>();

  constructor() { }

  ngOnInit() {
    this.toggle=false;
    this.number=0;
    this.myvar=setInterval(() =>{this.generateNum();},2000);
  }

  onStart(){
    this.toggle=true;
    
    console.log('after' + this.myvar);
    
  }

  generateNum(){
    if(this.toggle){
      this.number+=1;
      this.getNumber.emit({numb:this.number});
      console.log("Number is :" + this.number);  
    }
  }

  onStop(){
    console.log("stop");
    this.toggle=false;

  }
}
