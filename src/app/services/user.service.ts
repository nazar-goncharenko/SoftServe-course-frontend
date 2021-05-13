import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {User} from '../shared/interfaces/user';
import {ResponseData} from '../modules/user-side/response-data';
import {catchError, retry} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class UserService {
    private readonly userUrl: string;

    constructor(
        private http: HttpClient) {
        this.userUrl = 'http://localhost:8082/user/';
    }

    public findAll(): Observable<User[]> {          // only for ROLE = ADMIN
        return this.http.get<User[]>('http://localhost:8082/users',
            {
                headers: new HttpHeaders(
                    {
                        'Content-Type': 'application/json',
                        'Authorization': sessionStorage.getItem('Authorization')
                    }
                )
            }
        );
    }

    public getUserById(id: number): Observable<string[]> {
        console.log('Trying get user ' + id);
        const url = `${this.userUrl}${id}`;

        return this.http.get<string[]>(url);
    }

    public updateAll(id: number, file: File, updData): Subscription {
        console.log('Trying user information update...');
        const url = `${this.userUrl}${id}`;

        const formData: FormData = new FormData();
        if (file != null) {
            formData.append('file', file, file.name);
        }
        formData.append('userDTO', JSON.stringify(updData));

        return this.http.post<any>(url, formData)
            .subscribe(data => {
                console.log('Successful user updating!!!');
            }, error => {
                console.log(JSON.stringify(error));
            });
    }


    public deleteUser(id: number): Subscription {
        console.log('Trying user delete...');
        const url = `${this.userUrl}${id}`;

        return this.http.delete<User>(url).subscribe(data => {
            console.log('Successful user deleting!!!');
        }, error => {
            console.log(JSON.stringify(error));
        });
    }


}
