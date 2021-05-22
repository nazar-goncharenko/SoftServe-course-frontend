import {Component, Input, OnInit} from '@angular/core';
import {Video} from '@shared/interfaces/video';
import {AuthentificationService} from '@services/authentification.service';
import {User} from '@shared/interfaces/user';
import {CommentService} from '@services/comment.service';
import {ActivatedRoute} from '@angular/router';
import {Comment} from '@shared/interfaces/comment';
import {Estimation} from '@shared/interfaces/estimation';
import {AppConstants} from '@shared/app.constants';
import {VideoService} from '@services/video.service';
import {debounce} from 'rxjs/operators';
import * as _ from 'underscore';


const SLICE_CONST_VALUE = 2;
const WAIT_FETCH_TIME = 30000;

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {


    constructor(public authenticationService: AuthentificationService,
                private commentService: CommentService,
                private activatedRoute: ActivatedRoute,
                private videoService: VideoService) {
    }

    @Input()
    video: Video;

    showComments: boolean;

    comments: Array<Comment>;

    text: string;

    isLoggedIn: boolean;

    sliceValue = SLICE_CONST_VALUE;

    user: User;

    sortOptions = AppConstants.SortOptions;

    sortType = AppConstants.SortOptions[0];
    private _;

    ngOnInit(): void {
        this.isLoggedIn = this.authenticationService.isUserLoggedIn();
        this.authenticationService.getLoggedUser().subscribe(data => {
            this.user = data;
        });
        this.likeComment = _.debounce(this.likeComment, 1000);
        if (this.video) {
            this.initCommentsFromVideo(this.video);
        }
        this.updateData();
    }

    initCommentsFromVideo(video: Video): void {
        video.comments.forEach(comment => {
            comment.likes = [];
            comment.dislikes = [];
            comment.estimations.forEach(estimation => {
                if (estimation.like === true) {
                    comment.dislikes.push(estimation);
                } else {
                    comment.likes.push(estimation);
                }
            });
        });
        this.comments = video.comments;
        console.log(video.comments);
        this.showComments = video.showComments;
    }

    sendVideoComment(text: string): void {
        if (this.video) {
            this.commentService.addVideoComment(text, this.activatedRoute.snapshot.params.id).subscribe(data => {
                this.text = '';
                this.videoService.getById(this.video.id).subscribe(video => {
                    this.video = video;
                    this.initCommentsFromVideo(video);
                });
            });
        }
    }

    async updateData(): Promise<any> {
        setTimeout(() => {
            if (this.video) {
                this.videoService.getById(this.video.id).subscribe(video => {
                    this.video = video;
                    this.initCommentsFromVideo(video);
                });
            }
            this.updateData();
        }, WAIT_FETCH_TIME);
    }

    checkLike(comment: Comment): boolean {
        if (this.user) {
            for (const estimation of comment.likes) {
                if (estimation.user.id === this.user.id) {
                    return true;
                }
            }
        }
        return false;
    }

    checkDislike(comment: Comment): boolean {
        if (this.user) {
            for (const estimation of comment.dislikes) {
                if (estimation.user.id === this.user.id) {
                    return true;
                }
            }
        }
        return false;
    }


    likeComment(comment: Comment, like: boolean): void {
        if (this.user) {
            const estimation: Estimation = {
                id: null,
                user: this.user,
                like: !like
            };
            if (this.video) {
                this.commentService.likeVideoComment(comment, estimation).subscribe(data => {
                        this.videoService.getById(this.video.id).subscribe(video => {
                            this.video = video;
                            this.initCommentsFromVideo(video);
                        });
                    }
                );
            }
        } else {
            this.authenticationService.redirectToLogin();
        }
    }

    showMoreComments(): void {
        if (this.sliceValue === SLICE_CONST_VALUE) {
            this.sliceValue = this.comments.length;
        } else {
            this.sliceValue = SLICE_CONST_VALUE;
        }
    }
}
