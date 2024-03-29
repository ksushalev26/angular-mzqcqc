import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers(): void {
    this.usersService.getAll()
    .subscribe(users => this.users = users) 
  }

}
