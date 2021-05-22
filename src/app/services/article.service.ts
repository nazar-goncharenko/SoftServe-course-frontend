import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '@shared/interfaces/article';
import { AppConstants } from '@shared/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private currentLocation: string = 'home';

  constructor(private http: HttpClient) { }

  // getArticles(): Observable<Article[]> {
  //   return this.http.get<Article[]>(AppConstants.API_URL + '/articles');
  // }

  public setCurrentLocation(currentLocation: string): void{
    this.currentLocation = currentLocation;
  }

  addArticle(formData): Observable<any> {
    return this.http.post(`${AppConstants.API_URL}/articles`, formData,
        { responseType: 'text'});
  }

  public getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(AppConstants.API_URL + '/articles/' + this.currentLocation);
  }
}
