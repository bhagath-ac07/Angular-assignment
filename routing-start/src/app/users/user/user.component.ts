import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.user=
    {
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    }
    this.paramsSubscription=this.route.params.subscribe((params:Params)=>{
      this.user.id=params['id'];
      this.user.name=params['name'];

    })
  }
  onNav(){
    this.router.navigate(['/servers']);
  }
  //should unsubscribe observable created
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.paramsSubscription.unsubscribe();
  }

}
