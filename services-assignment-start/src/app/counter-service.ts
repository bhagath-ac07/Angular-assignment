export class CounterService {
    activeToInactive:number=0;
    inactiveToActive:number=0;
    activeToInactiveCount(){
        this.activeToInactive+=1;
        console.log("activeToInactive count is: "+this.activeToInactive);
    }
    inactiveToActiveCount(){
        this.inactiveToActive+=1;
        console.log("inactiveToActive count is: "+this.inactiveToActive);
    }
}
