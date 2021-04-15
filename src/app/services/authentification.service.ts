import {Injectable, OnInit} from '@angular/core';
import {ResponseData} from '../modules/user-side/response-data';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class AuthentificationService implements OnInit{
    private baseUrl = "http://localhost:8082";
    private loginUrl = "/login";

    constructor(
        private http: HttpClient
    ) { }

    httpOptions = {
        headers: new HttpHeaders(
            {
                'Content-Type' : 'application/json'
            }
        )
    }

    login(requestLoginDTO): Observable<ResponseData> {
        return this.http.post<ResponseData>(
            this.baseUrl+this.loginUrl,
            JSON.stringify(requestLoginDTO),
            this.httpOptions
        )
    }

    // handleError(error) {
    //     let errorMessage = `Error Code: ${error.status} - ${error.error.error} \nMessage: ${error.error.message}`;
    //     window.alert(errorMessage);
    //     return throwError(errorMessage);
    // }

    ngOnInit(): void {
    }

}
