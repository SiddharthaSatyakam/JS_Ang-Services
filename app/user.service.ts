import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UserService {

  activeUsers=['Max','Lab']
  inactiveUsers=['Ajay','Bijay']

  constructor(private countServ: CounterService) { }

  setactivetoInactive(id: number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.countServ.actoInact();
  }
  setinactivetoActive(id: number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.countServ.inactoAct();
  }
}
