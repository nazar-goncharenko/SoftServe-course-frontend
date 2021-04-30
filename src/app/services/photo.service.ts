import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PhotoDTO } from '../shared/interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  postPhoto(formData: FormData): Observable<object> {
    return this.http.post('http://localhost:8082/admin', formData);
  }

  getPhoto(): Observable<PhotoDTO> {
    return this.http.get<PhotoDTO>('http://localhost:8082');
  }

}
