import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {Survey} from '@shared/interfaces/survey';

@Injectable({providedIn: 'root'})
export class SurveyService {

    private readonly adminUrl: string;
    private readonly userUrl: string;

    constructor(
        private http: HttpClient) {
        this.adminUrl = 'http://localhost:8082/admin/';
        this.userUrl = 'http://localhost:8082/surveys/';
    }

    public findAllOpen(): Observable<Survey[]> {
        const url = `${this.userUrl}/open`;
        return this.http.get<Survey[]>(url);
    }

    public findAllClosed(): Observable<Survey[]> {
        const url = `${this.userUrl}/closed`;
        return this.http.get<Survey[]>(url);
    }

    public findAllOpenAdmin(userId: number): Observable<Survey[]> {
        const url = `${this.adminUrl}${userId}/surveys/open`;
        return this.http.get<Survey[]>(url);
    }

    public findAllClosedAdmin(userId: number): Observable<Survey[]> {
        const url = `${this.adminUrl}${userId}/surveys/closed`;
        console.log('findAllClosedAdmin ' + userId);
        return this.http.get<Survey[]>(url);
    }

    public closeSurvey(userId: number, surveyId: number): any {
        const url = `${this.adminUrl}${userId}/surveys/${surveyId}`;
        console.log('closeSurvey ' + surveyId);
        return this.http.post<any>(url, surveyId);
    }

    public changeStatusSurvey(userId: number, surveyId: number): any {
        const url = `${this.adminUrl}${userId}/surveys/${surveyId}/changeStatusSurvey`;
        console.log('changeStatusSurvey ' + surveyId);
        return this.http.post<any>(url, surveyId);
    }

    public deleteSurvey(userId: number, surveyId: number): any {
        const url = `${this.adminUrl}${userId}/surveys/${surveyId}`;
        console.log('deleteSurvey ' + surveyId);
        return this.http.delete<Survey>(url);
    }

}
