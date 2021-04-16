import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PhotoDTO } from '../shared/interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private baseUrl = 'http://localhost:8082/admin';

  constructor(private http: HttpClient) { }

  postPhoto(formData: FormData): Observable<object> {
    return this.http.post(this.baseUrl, formData);
  }

}
