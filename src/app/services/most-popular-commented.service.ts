import { Injectable } from '@angular/core';
import {Article} from "@shared/interfaces/article";
import {AppConstants} from "@shared/app.constants";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MostPopularCommentedService {

  constructor(private http: HttpClient) { }

  public getTopThreeArticle(currentLocation: string): Observable<Article[]>{
    return this.http.get<Article[]>(AppConstants.API_URL + '/mostPopular/' + currentLocation);
  }

  public reformPeriod(period: string): string{
    switch(period) {
      case "Day":
        return "period-1";
      case "Week":
        return "period-2";
      case "Month":
        return "period-3";
      case "Year":
        return "period-4";
    }
    return "Not found";
  }
}
