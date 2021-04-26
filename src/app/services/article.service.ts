import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import { Article } from '../shared/interfaces/article';
import {AppConstants} from '../shared/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(AppConstants.API_URL + '/articles');
  }

  addArticle(formData): Observable<any> {
    return this.http.post(`${AppConstants.API_URL}/articles`, formData,
        { responseType: 'text'});
  }
}
