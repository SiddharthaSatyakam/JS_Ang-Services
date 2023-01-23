import { Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];

  constructor(private userServ: UserService){}

  ngOnInit(){
    this.users=this.userServ.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userServ.setinactivetoActive(id);
  }
}
