import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CheckBox} from '../shared/interfaces/checkBox';


@Injectable({providedIn: 'root'})
export class CheckboxService {

    private readonly userUrl: string;

    constructor(
        private http: HttpClient) {
        this.userUrl = 'http://localhost:8082/user/';
    }

    public findAllBySurveyId(userId: number, surveyId: number): Observable<CheckBox[]> {
        console.log('Getting options for survey ' + surveyId);
        const url = `${this.userUrl}${userId}/surveys/${surveyId}`;
        return this.http.get<CheckBox[]>(url);
    }
}
