import { Observable } from 'rxjs/Rx';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  projectForm: FormGroup;
  ngOnInit() {
    this.projectForm = new FormGroup({
      //'projectName': new FormControl(null,[Validators.required,this.nameNotAllowed.bind(this)]),
      'projectName': new FormControl(null, [Validators.required],this.nameNotAllowedAsync),
      'mail': new FormControl(null, [Validators.required, Validators.email ])      
    }
    );
  }

  nameNotAllowed(control :FormControl):{[s:string] : boolean}{
    if(control.value=="Test"){
      return {"nameNotAllowed":true}
    }
    return null

  }

  nameNotAllowedAsync(control: FormControl): Promise<any>|Observable<any> {
    const promise=new Promise<any>((resolve,reject)=>{
      setTimeout(function() {
        if (control.value == "Test") {
          resolve({"nameNotAllowed": true })
        } else {
          resolve(null);
        }
      }, 2000);
      

    })
    
    return promise;

  }

  onSubmit(){
    console.log(this.projectForm);
  }
}
