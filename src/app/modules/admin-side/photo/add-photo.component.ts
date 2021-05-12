import { Component, OnInit } from '@angular/core';
import { PhotoDTO } from '@shared/interfaces/photo';
import { PhotoService } from '@services/photo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.scss']
})
export class AddPhotoComponent implements OnInit {

    constructor(private photoService: PhotoService) { }

    photo: PhotoDTO = {
        alt: null,
        photoTitle: null,
        description: null,
        author: null,
        isShown: true
    };
    img: File = null;

    // tslint:disable-next-line:typedef
    handleFileInput(event) {
        this.img = event.target.files[0];
    }

    // tslint:disable-next-line:typedef
    uploadFile(form: NgForm) {
        this.photoService.postPhoto(this.photo, this.img).subscribe(data => {
            console.log(data);
            },
            error => console.log(error));

        form.resetForm();
    }

  ngOnInit(): void {

  }


}
