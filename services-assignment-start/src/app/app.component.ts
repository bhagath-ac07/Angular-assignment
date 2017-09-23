import { sampleTime } from 'rxjs/operator/sampleTime';
import { UserService } from './user-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers:string[]=[];
  inactiveUsers:string[]=[];
  constructor(private userService:UserService){}
  ngOnInit(){
    this.activeUsers=this.userService.activeUsers;
    this.inactiveUsers=this.userService.inactiveUsers;
  }

 
}
