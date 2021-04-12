import { Component, OnInit } from '@angular/core';
import {Banner} from "../../../../../shared/interfaces/banner";
import {BannerService} from "../../../../../services/banners.service";

@Component({
  selector: 'app-banners-management',
  templateUrl: './banners-management.component.html',
  styleUrls: ['./banners-management.component.scss']
})
export class BannersManagementComponent implements OnInit {
  banners: Banner[];
  selectedBanner: Banner;

  constructor(private bannerService: BannerService) { }

  ngOnInit(): void {
    this.bannerService.getBanners().subscribe(data => {
      this.banners = data;
    });
  }

  setSelectedBanner(banner: Banner) {
    this.selectedBanner = banner;
  }

}
