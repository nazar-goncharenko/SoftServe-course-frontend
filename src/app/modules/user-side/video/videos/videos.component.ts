import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {VideoService} from '../../../../services/video.service';
import {Video} from '../../../../shared/interfaces/video';

@Component({
    selector: 'app-video',
    templateUrl: './videos.component.html',
    styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {


    videos: Array<Video>;

    // todo: Class var
    shareFromClass = true;

    // todo: Class var
    input: any;
    isSearch = false;


    constructor(private dialog: MatDialog, private router: Router,
                private videoService: VideoService) {
    }

    ngOnInit(): void {
        this.videoService.getPublished().subscribe(data => {
            this.videos = data;
        });
    }


    toggleSearch(): void {
        this.isSearch = !this.isSearch;
    }
}

