import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private bannerService: BannerService){}

  ngOnInit() {
    this.getBanner();

  }

    async editBanner(){
        await this.bannerService.updateBanner(this.banner).subscribe(

        );
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
