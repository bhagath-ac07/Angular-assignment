import { Observable } from 'rxjs/Rx';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
export interface CanComponentDeactivate{
    canDeactivate():Observable <boolean>| Promise <boolean> | boolean;

}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{


    public canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate();
    }
}