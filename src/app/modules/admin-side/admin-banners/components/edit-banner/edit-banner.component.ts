import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Banner} from "../../../../../shared/interfaces/banner";
import {BannerService} from "../../../../../services/banners.service";
import {subscribeOn} from "rxjs/operators";
import {error} from "@angular/compiler/src/util";


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
  response: String;


  constructor(private bannerService: BannerService){}

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
      this.uploadFile = files[0];
  }

    editBanner(){
      if (!this.isNew) {
          this.isEditing = true;
          this.isEditingChange.emit(this.isEditing);
          this.bannerService.updateBanner(this.banner, this.uploadFile).subscribe(
              data => this.response,
          );
      } else {
          // this.bannerService.createBanner(this.banner, this.uploadFile).subscribe(
          //     data => this.response
          // )
          this.bannerService.createBanner(this.banner, this.uploadFile).subscribe(
              () => {
              },
              (error: HttpErrorResponse) => {
                  console.log(error)
              })

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
