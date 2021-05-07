import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {Survey} from '../shared/interfaces/survey';
import {User} from "../shared/interfaces/user";

@Injectable({providedIn: 'root'})
export class SurveyService {

    private readonly userUrl: string;

    constructor(
        private http: HttpClient) {
        this.userUrl = 'http://localhost:8082/user/';
    }

    public findAllByUserId(userId: number): Observable<Survey[]> {
        const url = `${this.userUrl}${userId}/surveys`;
        return this.http.get<Survey[]>(url);
    }

    public findOpenByUserId(userId: number): Observable<Survey[]> {
        const url = `${this.userUrl}${userId}/surveys/open`;
        return this.http.get<Survey[]>(url);
    }

    public findClosedByUserId(userId: number): Observable<Survey[]> {
        const url = `${this.userUrl}${userId}/surveys/closed`;
        return this.http.get<Survey[]>(url);
    }

    public updateSurvey(userId: number, surveyId: number, updData): any {

        const url = `${this.userUrl}${userId}/surveys/${surveyId}`;
        updData.id = surveyId;
        console.log(updData);

        const formData: FormData = new FormData();
        formData.append('surveyDTO', JSON.stringify(updData));
        return this.http.post<any>(url, formData).subscribe(data => {
            console.log('Survey opened/closed successfully!');
        }, error => {
            console.log(JSON.stringify(error));
        });
    }

    public deleteSurvey(userId: number, surveyId: number): Subscription {
        const url = `${this.userUrl}${userId}/surveys/${surveyId}`;

        return this.http.delete<Survey>(url).subscribe(data => {
            console.log('Successful survey deleting!!!');
        }, error => {
            console.log(JSON.stringify(error));
        });
    }

}
