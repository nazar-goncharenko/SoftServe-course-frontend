import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Video} from '../../../../shared/interfaces/video';
import {VideoService} from '../../../../services/video.service';

@Component({
    selector: 'app-video-form-confirm',
    templateUrl: './video-form-confirm.component.html',
    styleUrls: ['./video-form-confirm.component.scss']
})
export class VideoFormConfirmComponent implements OnInit {

    video: Video;
    delete = false;
    publish = false;

    constructor(public dialogRef: MatDialogRef<VideoFormConfirmComponent>,
                @Inject(MAT_DIALOG_DATA) private data: any,
                private videoService: VideoService) {
    }

    ngOnInit(): void {
        this.video = this.data.video;
        if (this.data.delete === true) {
            this.delete = true;
        }
        if (this.data.publish === true) {
            this.publish = true;
        }
        console.log(this.data);
    }

    deleteVideo(): void {
        this.videoService.delete(this.video);
        this.dialogRef.close({
            delete: true,
            title: 'Successful',
            message: 'Video successfully deleted'
        });
    }

    publishVideo(): void {
        this.video.publish = !this.video.publish;
        this.videoService.saveVideo(this.video);
        this.dialogRef.close(
            {
                title: 'Successful',
                message: 'Video successfully changed'
            });
    }
}
