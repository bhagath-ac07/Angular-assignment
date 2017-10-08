import { Observable } from 'rxjs/Rx';
import { CanDeactivateGuard, CanComponentDeactivate } from './can-deactivate-guard.service';
import { ActivatedRoute, ActivatedRouteSnapshot, CanDeactivate, Params, RouterStateSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit=false;
  changesSaved=false;

  constructor(private serversService: ServersService,private route:ActivatedRoute) { }

  ngOnInit() {
    //this.server = this.serversService.getServer(1);
    

    //subscribes for a param
    this.route.params.subscribe((params:Params)=>{
      
      this.server = this.serversService.getServer(+params['id']);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;

    }
  );

  //subscribe for string 
  this.route.queryParams.subscribe((queryParam:Params)=>{
    this.allowEdit= queryParam['allowEdit'] === '1' ? true:false;
    }
  );
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved=true;
  }


    public canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        if(!this.allowEdit){
          return true;
        }

        if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved){
          return confirm('Do you want to discard changes');
        }else{
           return true;
        }
    }
}
