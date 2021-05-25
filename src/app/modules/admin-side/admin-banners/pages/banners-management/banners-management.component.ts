import {Component, OnInit} from '@angular/core';
import {Banner, BannerStatusShort} from "@shared/interfaces/banner";
import {BannerService} from "@services/banners.service";
import {SportCategory} from "@shared/interfaces/sportCategory";

@Component({
  selector: 'app-banners-management',
  templateUrl: './banners-management.component.html',
  styleUrls: ['./banners-management.component.scss']
})
export class BannersManagementComponent implements OnInit {
  banners: Banner[];
  predefined: SportCategory[];
  selectedBanner: Banner;
  isSelectedBannerNew: boolean = true;
  isEditing: boolean;
  messages: any;

  constructor(private bannerService: BannerService) { }

  ngOnInit(): void {
    this.bannerService.getBanners().subscribe( data =>{
      this.banners = data;
    });
    this.bannerService.getPredefined().subscribe( data =>{
      this.predefined = data;
    })
  }

  setSelectedBanner(banner: Banner, isNew = false) {
    this.isSelectedBannerNew = isNew;
    this.selectedBanner = banner;
    this.isEditing = false;
  }

  addBanner() {
    this.setSelectedBanner({title: ''}, true);
    this.isEditing = true;
  }
}
