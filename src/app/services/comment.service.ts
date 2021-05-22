import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '@shared/app.constants';
import {Comment} from '@shared/interfaces/comment';
import {Router} from '@angular/router';
import {Estimation} from '@shared/interfaces/estimation';
import {AuthentificationService} from '@services/authentification.service';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class CommentService {


    url = AppConstants.API_URL + '/comments/';

    constructor(private http: HttpClient,
                private router: Router,
                private authService: AuthentificationService) {
    }

    addVideoComment(text: string, id: number): Observable<any> {
        const comment: Comment = {
            id: null,
            comment: text,
            author: null,
            time: new Date(),
            estimations: []
        };
        return this.http.post(this.url + 'videoComment/' + id, comment);
    }

    likeVideoComment(comment: Comment, estimation: Estimation): Observable<any> {
        return this.http.post(this.url + 'videoComments/' + comment.id + '/like', estimation);
    }
}
