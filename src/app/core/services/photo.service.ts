import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PhotoDTO} from '../../shared/interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private baseUrl = 'http://localhost:8081/admin';

  constructor(private http: HttpClient) { }

  postPhotoDTO(photo: PhotoDTO): Observable<object> {
    return this.http.post(this.baseUrl, photo);
  }

  postFile(formData: FormData): Observable<object> {
    return this.http.put<any>(this.baseUrl, formData);
  }

}
