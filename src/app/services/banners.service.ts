import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Banner, BannerStatusShort} from "../shared/interfaces/banner";
import {SportCategory} from "../shared/interfaces/sportCategory";

@Injectable({providedIn: 'root'})
export class BannerService {
    private apiServerUrl = "http://localhost:8081";

    constructor(private http: HttpClient){}

    public getBanners(): Observable<Banner[]> {
        return this.http.get<Banner[]>(`${this.apiServerUrl}/banners`);
    }

    public getBannersByStatus(status: string): Observable<Banner[]> {
        return this.http.get<Banner[]>(`${this.apiServerUrl}/banners/${status}`);
    }

    // public getBannersClosed(): Observable<Banner[]> {
    //     return this.http.get<Banner[]>(`${this.apiServerUrl}/banners/closed`);
    // }

    public getPredefined(): Observable<SportCategory[]> {
        return this.http.get<SportCategory[]>(`${this.apiServerUrl}/banners/predefinedCategories`);
    }

    public getBanner(id : number): Observable<Banner> {
        return this.http.get<Banner>(`${this.apiServerUrl}/banners/${id}`);
    }

    public getBannerForUpdate(id: number): Observable<Banner> {
        return this.http.get<Banner>(`${this.apiServerUrl}/banners/${id}`);
    }

    public updateBanner(banner: Banner, file: File): Observable<Banner> {
        const formData: FormData = new FormData();
        formData.append('file', file);
        formData.append('title', banner.title)
        return this.http.put<Banner>(`${this.apiServerUrl}/banners/update/${banner.id}`, formData);
    }

    public configureBanner(banner: Banner): Observable<Banner> {
        return this.http.put<Banner>(`${this.apiServerUrl}/banners/configure`, banner);
    }

    public getCategories(): Observable<SportCategory[]> {
        return this.http.get<SportCategory[]>(`${this.apiServerUrl}/sportCategory/basicNavigationList`);
    }

    public predefinedSetting(category : SportCategory, state : String): Observable<SportCategory>{
        return this.http.put<SportCategory>(`${this.apiServerUrl}/banners/${state}?category=${category.name}`, "");
    }


}
