import {EventEmitter, Input, Output} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Banner, BannerStatus} from "../../../../../shared/interfaces/banner";
import {SportCategory} from "../../../../../shared/interfaces/sportCategory";
import {BannerService} from "../../../../../services/banners.service";



@Component({
  selector: 'app-banner-item',
  templateUrl: './banner-item.component.html',
  styleUrls: ['./banner-item.component.scss']
})
export class BannerItemComponent implements OnInit {
  @Input() banner: Banner;
  @Output() bannerChange: EventEmitter<Banner> = new EventEmitter<Banner>();
  categories : SportCategory[];

  constructor(private bannerService : BannerService) { }

  ngOnInit(): void {
    this.bannerService.getCategories().subscribe( data =>{
      this.categories = data;
    })
  }

  get statuses() {
    const result = [];
    for (let option in BannerStatus) {
      result.push({key: option, value: BannerStatus[option]});
    }

    return result;
  }

  bannerChanged() {
    this.bannerChange.emit(this.banner);
  }

}
