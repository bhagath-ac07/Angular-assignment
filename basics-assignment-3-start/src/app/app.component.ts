import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle = true;
  password = '';
  passwordArray = [];

  constructor() {
    this.password = Math.random().toString(36).slice(-8);
  }
  generatePassword() {
    this.toggle = !this.toggle;
    this.password = Math.random().toString(36).slice(-8);
    this.passwordArray.push(this.password);
  }
  getColor(pass: string) {
    console.log(this.passwordArray.indexOf(pass));
    return this.passwordArray.indexOf(pass) > 4 ? 'blue' : 'none';
  }
}
