import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Video} from '../shared/interfaces/video';

@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(video: Video): any {
        let res: string;
        if (!video.uploaded) {
            const url = video.url;

            const arr = url.split('?v=');
            const link = arr[1].split('&')[0];
            res = 'https://www.youtube-nocookie.com/embed/' + link + '?controls=1';
            res = (this.sanitizer.bypassSecurityTrustResourceUrl(res) as string);
        } else {
            res = 'assets/videos/' + video.url;
        }
        console.log(res);
        return res;
    }
}
