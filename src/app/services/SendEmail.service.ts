import {Observable, throwError} from 'rxjs';
import {ResponseData} from '@modules/user-side/response-data';
import {catchError, retry} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '@modules/user-side/user';


const httpOptions = {
    headers: new HttpHeaders(
        {
            'Content-Type': 'application/json'
        }
    )
};

@Injectable({
    providedIn: 'root'
})
export class SendEmailService {

    baseUrl = 'http://localhost:8082';
    forgotUrl = '/forgot_password';
    constructor(
        private http: HttpClient
    ) { }
    send(requestRegistrationDTO: User): Observable<ResponseData> {
        return this.http.post<ResponseData>(
            this.baseUrl + this.forgotUrl,
            requestRegistrationDTO,
            httpOptions
        ).pipe(
            retry(1),
            catchError(this.handleError)
        );
    }

    handleError(error) {
        let errorMessage = `Error Code: ${error.status} - ${error.error.error} \nMessage: ${error.error.message}`;
        window.alert(errorMessage);
        return throwError(errorMessage);
    }
}
