import { NgForm } from '@angular/forms/src/directives';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions=["Basic", "Advanced", "Pro"];
  userdata={email:'',subscription:'',password:''};
  isSubmited=false
  onSubmit(form:NgForm){
    this.isSubmited=true
    this.userdata.email=form.value.email;
    this.userdata.subscription=form.value.subscription;
    this.userdata.password=form.value.password;

  }

}
