import { Component, OnInit } from '@angular/core';
import { PhotoDTO } from '../../../shared/interfaces/photo';
import { PhotoService } from '../../../services/photo.service';

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
    id: any;

    // tslint:disable-next-line:typedef
    handleFileInput(event) {
        this.img = event.target.files[0];
    }

    // tslint:disable-next-line:typedef
    uploadFile() {
        const formData: FormData = new FormData();

        this.photoService.postPhotoDTO(this.photo).subscribe(data => {
                formData.append('id', JSON.stringify(data));
                formData.append('img', this.img);
                this.photoService.postFile(formData).subscribe(response => {
                        console.log(response);
                    },
                    error => console.log(error));
            },
            error => console.log(error));
    }

  ngOnInit(): void {

  }

}
