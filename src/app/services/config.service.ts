import { Injectable } from '@angular/core';
import {Config} from "@shared/interfaces/config";
import {HttpClient} from "@angular/common/http";
import {AppConstants} from "@shared/app.constants";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config: Config = null;

  constructor(private http: HttpClient) { }

  public load(){
    console.log("load()");

    return this.http.get<Config>(AppConstants.API_URL + "/config/get").toPromise().then(config => {
      this.config = config;
      console.log(config);
    })
  }

  public configuration(): Config{
    return this.config;
  }

  public sendConfig(config: Config){
    console.log("sendConfig " + config.period);
    return this.http.post<void>(AppConstants.API_URL + "/config/set", config);
  }
}
