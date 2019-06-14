import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //private usersUrl = 'http://localhost:3000/users';
  private usersUrl = 'api/users';
  constructor(
    private http: HttpClient    
  ) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
  }
}
