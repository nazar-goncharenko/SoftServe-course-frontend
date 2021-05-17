import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {VideoService} from '../../../../services/video.service';
import {Video} from '../../../../shared/interfaces/video';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {


    video: Video;

    videos = [];

    id: number;
    text: string;


    constructor(private dialog: MatDialog,
                private activateRoute: ActivatedRoute,
                private videoService: VideoService) {
        this.id = activateRoute.snapshot.params.id;
    }

    ngOnInit(): void {
        this.videoService.getById(this.id).subscribe(data => {
            this.video = data;
            this.videoService.getAll().subscribe(data1 => {
            let count = 0;
            for (const video of data1) {
                if (count === 4) {
                    break;
                } else {
                    if (video.id !== this.video.id && video.publish) {
                        this.videos.push(video);
                        ++count;
                    }
                }
            }
        });
        });
    }

    sendComment(text: string): void {
        console.log(text);
    }
}

