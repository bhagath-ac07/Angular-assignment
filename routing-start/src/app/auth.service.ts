import { setTimeout } from 'timers';
export class AuthService{
    loggedIn:boolean=false;

    isAthenticated(){
        const promise=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(this.loggedIn);
            },8);
        });
        return promise;
    }
    login(){
        this.loggedIn=true;
    }

    logout(){
        this.loggedIn=false;
    }
}