import {Observable, throwError} from 'rxjs';
import {ResponseData} from '@modules/user-side/response-data';
import {catchError, retry} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Reset_entity} from '@modules/user-side/reset_entity';

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
export class ResetService {

    baseUrl = 'http://localhost:8082';
    resetUrl = '/reset_password';
    constructor(
        private http: HttpClient
    ) { }
    reset(resetEntity: Reset_entity): Observable<ResponseData> {
        return this.http.post<ResponseData>(
            this.baseUrl + this.resetUrl,
            resetEntity,
            httpOptions
        ).pipe(
            retry(1),
            catchError(this.handleError)
        );
    }

    handleError(error) {
        const errorMessage = `Error Code: ${error.status} - ${error.error.error} \nMessage: ${error.error.message}`;
        window.alert(errorMessage);
        return throwError(errorMessage);
    }
}
