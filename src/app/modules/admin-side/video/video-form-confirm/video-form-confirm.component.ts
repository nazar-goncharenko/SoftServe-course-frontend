import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Video} from '../../../../shared/interfaces/video';
import {VideoService} from '../../../../services/video.service';
import {FlashMessage} from '../../../../shared/interfaces/flashMessage';
import {MessagesEnum} from '../../../../shared/interfaces/messagesEnum';
import {Message} from '@angular/compiler/src/i18n/i18n_ast';

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
            message: this.deleteMessage()
        });
    }

    publishVideo(): void {
        this.video.publish = !this.video.publish;
        this.videoService.saveVideo(this.video);
        this.dialogRef.close(
            {
                message: this.publishMessage()
            });
    }


    deleteMessage(): FlashMessage {
        const message = new FlashMessage();
        message.title = 'Successful';
        message.text = 'Video successfully deleted';
        message.type = MessagesEnum.warn;
        return message;
    }


    publishMessage(): FlashMessage {
        const message = new FlashMessage();
        message.title = 'Successful';
        message.text = 'Video successfully changed';
        message.type = MessagesEnum.successful;
        return message;
    }
}
