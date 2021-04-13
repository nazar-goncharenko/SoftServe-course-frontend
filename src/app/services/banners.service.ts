import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Banner} from "../shared/interfaces/banner";
import {SportCategory} from "../shared/interfaces/sportCategory";

@Injectable({providedIn: 'root'})
export class BannerService {
    private apiServerUrl = "http://localhost:8081"

    constructor(private http: HttpClient){}

    public getBanners(): Observable<Banner[]> {
        return this.http.get<Banner[]>(`${this.apiServerUrl}/banners`);
    }

    public getPredefined(): Observable<SportCategory[]> {
        return this.http.get<SportCategory[]>(`${this.apiServerUrl}/banners/predefinedCategories`);
    }


    public getBanner(id : number): Observable<Banner> {
        return this.http.get<Banner>(`${this.apiServerUrl}/banners/${id}`);
    }

    public getBannerForUpdate(id: number): Observable<Banner> {
        return this.http.get<Banner>(`${this.apiServerUrl}/banners/${id}`);
    }

    public updateBanner(banner: Banner, file: File): Observable<string> {
        const formData: FormData = new FormData();
        formData.append('file', file);
        return this.http.put<string>(`${this.apiServerUrl}/banners/update/${banner.id}?title=${banner.title}`, formData);
    }
}
