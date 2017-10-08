import { ServerResolverService } from '../servers/server/server-resolver.service';
import { Server } from 'http';
import { resolve } from 'dns';
import { ErrorPageComponent } from './../error-page/error-page.component';
import { CanDeactivateGuard } from '../servers/edit-server/can-deactivate-guard.service';
import { AuthGuard } from '../auth-guard.service';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { EditServerComponent } from '../servers/edit-server/edit-server.component';
import { ServerComponent } from '../servers/server/server.component';
import { ServersComponent } from '../servers/servers.component';
import { UserComponent } from '../users/user/user.component';
import { UsersComponent } from '../users/users.component';
import { HomeComponent } from '../home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const appRoutes : Routes =[
  {path: '' ,component:HomeComponent},
  {path: 'users' ,component:UsersComponent,children:[
    {path: ':id/:name' ,component:UserComponent}
  ]},
  {path: 'servers' ,
  //canActivate:[AuthGuard],
  canActivateChild:[AuthGuard],
  component:ServersComponent, children:[
    {path: ':id' ,component:ServerComponent,resolve:{server:ServerResolverService}},
    {path: ':id/edit' ,component:EditServerComponent,canDeactivate:[CanDeactivateGuard] } 
  ]},
 // {path:'not-found',component:PagenotfoundComponent},
  {path:'not-found',component:ErrorPageComponent, data:{errorMessage:'404 NOt found'}},
  //this should be last route
  {path:'**',redirectTo:'/not-found'},
  
];

@NgModule({
    imports:[
      //usehash is for older browsers/servers.
//RouterModule.forRoot(appRoutes, {useHash:true})
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoute{

}