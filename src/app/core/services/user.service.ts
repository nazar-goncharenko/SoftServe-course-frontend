import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../shared/model/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/user/';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/users');
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.userUrl + id);
  }

  public save(user: User, id: number): Observable<User> {         // update user
    return this.http.post<User>(this.userUrl + id, user);
  }
}
