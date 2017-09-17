import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() oddNumber: number;
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
