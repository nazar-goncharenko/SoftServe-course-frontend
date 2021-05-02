import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {VideoFormComponent} from '../video-form/video-form.component';
import {Router} from '@angular/router';
import {VideoService} from '../../../../services/video.service';
import {Video} from '../../../../shared/interfaces/video';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class AdminVideoComponent implements OnInit {
    isSearch = false;

    shareAllow = 'Yes';

    views = [
        {name: 'All', value: null},
        {name: 'Published', value: true},
        {name: 'Unpublished', value: false}
    ];

    videos: Array<Video>;

    // todo: Class var
    shareFromClass = true;

    // todo: Class var
    input: any;
    type = null;


    constructor(private dialog: MatDialog, private router: Router,
                private videoService: VideoService) {
    }

    ngOnInit(): void {
        this.videoService.getAll().subscribe(data => {
            this.videos = data;
        });
        if (this.shareFromClass === true) {
            this.shareAllow = 'Yes';
        } else {
            this.shareAllow = 'No';
        }
    }


    toggleSearch(): void {
        this.isSearch = !this.isSearch;
    }

    allowSaveChange(): void {
        if (this.shareAllow === 'Yes') {
            this.shareFromClass = !this.shareFromClass;
            this.shareAllow = 'No';
        } else {
            this.shareAllow = 'Yes';
            this.shareFromClass = !this.shareFromClass;
        }
    }

    changeView(value: string): void {
        this.type = value;
    }

    openDialog(): void {
        // @ts-ignore
        const dialogRef = this.dialog.open(VideoFormComponent, {
            width: document.body.offsetWidth * 0.5
        });
        dialogRef.afterClosed();
    }

    changePublish(video: Video): any {
        video.publish = !video.publish;
        this.videoService.saveVideo(video);
    }

    delete(video: Video): any {
        this.videos.splice(
            this.videos.indexOf(video), 1
        );
        this.videoService.delete(video);
    }
}

