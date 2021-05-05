import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {ResponseData} from '../modules/user-side/response-data';
import {User} from '../modules/user-side/user';

const httpOptions = {
    headers: new HttpHeaders(
        {
            'Content-Type' : 'application/json'
        }
    )
}

@Injectable({
    providedIn: 'root'
})
export class RegistrationClientService {

    baseUrl = "http://localhost:8082";
    registrationUrl = "/registration"
    constructor(
        private http: HttpClient
    ) { }

    register(requestRegistrationDTO: User): Observable<ResponseData> {
        return this.http.post<ResponseData>(
            this.baseUrl+this.registrationUrl,
            requestRegistrationDTO,
            httpOptions
        ).pipe(
            retry(1),
            catchError(this.handleError)
        )
    }

    handleError(error) {
        let errorMessage = `Error Code: ${error.status} - ${error.error.error} \nMessage: ${error.error.message}`;
        window.alert(errorMessage);
        return throwError(errorMessage);
    }
}
