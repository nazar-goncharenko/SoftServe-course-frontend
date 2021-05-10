import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Banner} from "../../../../../shared/interfaces/banner";
import {BannerService} from "../../../../../services/banners.service";


class HttpErrorResponse {
  message: "No banners";
}

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.scss']
})
export class EditBannerComponent implements OnInit {

  @Input() banner: Banner;
  @Input() isNew: boolean;
  uploadFile: File = null;
  @Input() isEditing: boolean;
  @Output() isEditingChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private bannerService: BannerService){}

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
      this.uploadFile = files[0];
  }

    editBanner(){
      if (!this.isNew) {
          this.bannerService.updateBanner(this.banner, this.uploadFile).subscribe(
              data => console.log(data)
          );
          this.isEditing = false;
      } else {
          this.bannerService.createBanner(this.banner, this.uploadFile).subscribe(
              data => console.log(data)
          )
          this.isEditing = false;
      }
    }


    public getBanner(): void {
    this.bannerService.getBanner(2).subscribe(
        (response: Banner) => {
          this.banner = response;
          console.log(this.banner);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
    );
  }

}
