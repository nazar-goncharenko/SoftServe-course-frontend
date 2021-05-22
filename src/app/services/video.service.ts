import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Video} from '../shared/interfaces/video';
import {J} from '@angular/cdk/keycodes';
import {Router} from '@angular/router';
import {log} from 'util';
import {AppConstants} from '../shared/app.constants';

@Injectable({
    providedIn: 'root'
})
export class VideoService {

    private url = '/videos/';

    constructor(private httpClient: HttpClient,
                private router: Router) {
    }

    getAll(): any {
        return this.httpClient.get<Array<Video>>(AppConstants.API_URL + this.url);
    }

    getById(id: number): any {
        return this.httpClient.get<Video>(AppConstants.API_URL + this.url + id);
    }

    getPublished(): any {
        return this.httpClient.get<Array<Video>>(AppConstants.API_URL + this.url + 'published');
    }

    add(videoDTO: Video, file: File): any {
        const formData: FormData = new FormData();
        formData.append('file', file);
        formData.append('videoDTO', JSON.stringify(videoDTO));
        this.httpClient.post<Video>(AppConstants.API_URL + this.url , formData).subscribe(data => {
            console.log(data);

            this.router.navigate(['admin/videos/' + data.id]);
        });
    }

    update(videoDTO: Video, file: File): any {
        const formData: FormData = new FormData();
        formData.append('file', file);
        formData.append('videoDTO', JSON.stringify(videoDTO));
        this.httpClient.put<Video>(AppConstants.API_URL + this.url , formData).subscribe(data => {
            this.router.navigate(['admin/videos/' + data.id]);
        });
    }


    saveVideo(videoDTO: Video): any {
        const formData: FormData = new FormData();
        formData.append('videoDTO', JSON.stringify(videoDTO));
        this.httpClient.put<Video>(AppConstants.API_URL + this.url, formData).subscribe(data => {
            this.router.navigate(['admin/videos/']);
        });
    }


    delete(video: Video): any {
        this.httpClient.delete<Video>(AppConstants.API_URL + this.url + video.id).subscribe(data => {
            this.router.navigate(['admin/video/']);
        });
    }

    comment(video: Video, text: string): any{
        this.httpClient.post(AppConstants.API_URL + this.url + '/' + video.id + '/comment', text);
    }
}
