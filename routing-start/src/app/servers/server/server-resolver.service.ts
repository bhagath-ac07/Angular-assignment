import { ServersService } from './../servers.service';
import { Observable } from 'rxjs/Rx';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

interface Server{
    id:number,
    name:String,
    status:String
}

@Injectable()
export class ServerResolverService implements Resolve<Server>{

constructor(private serverService:ServersService) { }


    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        return this.serverService.getServer(+route.params['id'])
    }
}