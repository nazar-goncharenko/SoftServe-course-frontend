import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PhotoDTO } from '../shared/interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  postPhoto(photo: PhotoDTO, img: File): Observable<object> {
    const formData: FormData = new FormData();

    formData.append('photoDTO', JSON.stringify(photo));

    if (img != null) {
      formData.append('img', img);
    }
    return this.http.post('http://localhost:8082/admin', formData);
  }

  getPhoto(): Observable<PhotoDTO> {
    return this.http.get<PhotoDTO>('http://localhost:8082');
  }

}
