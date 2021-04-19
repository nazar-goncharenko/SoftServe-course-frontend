import { Component, OnInit } from '@angular/core';
import { PhotoDTO } from '../../../shared/interfaces/photo';
import { PhotoService } from '../../../services/photo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.scss']
})
export class AddPhotoComponent implements OnInit {

    constructor(private photoService: PhotoService) { }

    photo: PhotoDTO = {
        alt: '',
        photoTitle: '',
        description: '',
        author: '',
        isShown: false
    };
    img: File = null;

    // tslint:disable-next-line:typedef
    handleFileInput(event) {
        this.img = event.target.files[0];
    }

    // tslint:disable-next-line:typedef
    uploadFile(form: NgForm) {
        const formData: FormData = new FormData();
        formData.append('photoDTO', JSON.stringify(this.photo));
        formData.append('img', this.img);

        this.photoService.postPhoto(formData).subscribe(data => {
            console.log(data);
            },
            error => console.log(error));

        form.resetForm();
    }

  ngOnInit(): void {

  }

}
