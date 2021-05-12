import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Video} from '../../../../shared/interfaces/video';
import {VideoService} from '../../../../services/video.service';
import {VideoFormComponent} from '../video-form/video-form.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
    selector: 'app-video-edit',
    templateUrl: './video-edit.component.html',
    styleUrls: ['./video-edit.component.scss']
})
export class VideoEditComponent implements OnInit {

    id: number;

    video: Video;

    constructor(private activateRoute: ActivatedRoute,
                private dialog: MatDialog,
                private videoService: VideoService) {
        this.id = activateRoute.snapshot.params.id;
    }

    ngOnInit(): void {
        this.videoService.getById(this.id).subscribe(data => {
            this.video = data;
        });
    }

    allowCommentChange(): void {
        this.video.showComments = !this.video.showComments;
    }

    changeVideo(): void {
        // @ts-ignore
        const dialogRef = this.dialog.open(VideoFormComponent, {
            width: document.body.offsetWidth * 0.5,
            data: {
                change: true,
                video: this.video
            }
        });
        dialogRef.afterClosed().subscribe(data => {
            this.video.url = data.url;
        });
    }

    save(): void {
        this.videoService.saveVideo(this.video);
    }
}
