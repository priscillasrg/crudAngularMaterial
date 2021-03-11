import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from '../models/Iuser';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient
    ) { }

    listAllUsers(): Observable<IUser[]> {
      return this.http.get<IUser[]>(`${environment.api}/users`);
    }

    addUser(user: IUser): Observable<IUser> {
      return this.http.post<IUser>(`${environment.api}/users`, user);
    }

    deleteUser(id: string): Observable<any> {
      return  this.http.delete<any>(`${environment.api}/users/${id}`);
    }

    getUserById(id: string): Observable<IUser> {
      return this.http.get<IUser>(`${environment.api}/users/${id}`);
    }

    updateUser(id: string, user: IUser): Observable<IUser> {
      return this.http.put<IUser>(`${environment.api}/users/${id}`, user);
    }
}
