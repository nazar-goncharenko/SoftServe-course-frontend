import {Injectable, OnInit} from '@angular/core';
import {ResponseData} from '../modules/user-side/response-data';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../shared/interfaces/user';
import {UserService} from './user.service';
import {Router} from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class AuthentificationService implements OnInit {
    private baseUrl = 'http://localhost:8082';
    private loginUrl = '/login';
    private httpOptions: { headers: HttpHeaders };

    constructor(
        private http: HttpClient,
        private userService: UserService,
        private router: Router
    ) {
    }


    login(requestLoginDTO): Observable<ResponseData> {

        this.httpOptions = {
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json',
                    Authorization: 'Basic ' + btoa(requestLoginDTO.email + ':' + requestLoginDTO.password)
                }
            )
        };
        return this.http.post<ResponseData>(
            this.baseUrl + this.loginUrl,
            JSON.stringify(requestLoginDTO),
            this.httpOptions
        ).pipe(
            map(
                userData => {
                    sessionStorage.setItem('email', requestLoginDTO.email);
                    const authString = 'Basic ' + btoa(requestLoginDTO.email + ':' + requestLoginDTO.password);
                    sessionStorage.setItem('Authorization', authString);
                    return userData;
                })
        );
    }

    // handleError(error) {
    //     let errorMessage = `Error Code: ${error.status} - ${error.error.error} \nMessage: ${error.error.message}`;
    //     window.alert(errorMessage);
    //     return throwError(errorMessage);
    // }
    isUserLoggedIn(): boolean {
        const user = sessionStorage.getItem('email');
        console.log(!(user === null));
        return !(user === null);
    }

    logOut() {
        sessionStorage.removeItem('email');
    }

    getLoggedUser(): Observable<User> {
        return this.userService.getByEmail(sessionStorage.getItem('email'));
    }

    ngOnInit(): void {
    }

    redirectToLogin(): void {
        this.router.navigate(['/login']);
    }

}
