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
    url = 'assets/photo/add_picture.svg';

    // tslint:disable-next-line:typedef
    handleFileInput(event) {
        this.img = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (e: any) => {
            this.url = e.target.result;
        };
    }

    // tslint:disable-next-line:typedef
    uploadFile(form: NgForm) {
        if (this.img != null || (this.img == null && !this.photo.isShown)) {
            this.photoService.postPhoto(this.photo, this.img).subscribe(data => {
                    console.log(data);
                },
                error => console.log(error));
        }

        form.resetForm();
    }

  ngOnInit(): void {

  }


}
