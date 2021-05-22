import {Component, Inject, OnInit} from '@angular/core';
import {Video} from '../../../../shared/interfaces/video';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {VideoService} from '../../../../services/video.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-video-form',
    templateUrl: './video-form.component.html',
    styleUrls: ['./video-form.component.scss']
})
export class VideoFormComponent implements OnInit {

    formVideo: Video = {
        id: 0,
        title: '',
        url: '',
        publish: false,
        uploaded: true,
        showComments: true,
        comments: []
    };

    file: File;

    disable = true;

    constructor(
        public dialogRef: MatDialogRef<VideoFormComponent>,
        private videoService: VideoService,
        private router: Router,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit(): void {
    }

    changeDisable(): void {
        this.disable = false;
    }

    handleFileInput(files: FileList): void {
        this.changeDisable();
        this.file = files.item(0);
    }

    addVideo(): void {
        if (this.data == null || this.data.change == null) {
            if (this.formVideo.url) {
                this.file = null;
                this.formVideo.uploaded = false;
            }
            this.videoService.add(this.formVideo, this.file);
        } else {
            if (this.formVideo.url && this.data.video.uploaded) {
                this.data.video.uploaded = false;
                this.data.video.url = this.formVideo.url;
                this.videoService.update(this.data.video, this.file);
            }

            if (this.formVideo.url !== this.data.video.url) {
                this.data.video.url = this.formVideo.url;
                this.videoService.update(this.data.video, this.file);
            }

            if (!this.data.video.uploaded && this.file) {
                this.data.video.uploaded = true;
                this.videoService.update(this.data.video, this.file);
            }
            this.dialogRef.close(this.data.video);
        }
        this.dialogRef.close();
    }

    checkUrlInput(): void {
        if (this.formVideo.url) {
            this.changeDisable();
        } else {
            this.disable = true;
        }
    }
}
