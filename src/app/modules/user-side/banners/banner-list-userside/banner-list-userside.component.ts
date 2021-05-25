import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BannerService} from "@services/banners.service";
import {Banner} from "@shared/interfaces/banner";

@Component({
  selector: 'app-banner-list-userside',
  templateUrl: './banner-list-userside.component.html',
  styleUrls: ['./banner-list-userside.component.scss']
})
export class BannersListUsersideComponent implements OnInit {

  @Input() banners: Banner[];
  @Output() selectedBannerChanged = new EventEmitter<Banner>();
  @Input() categoryId: number;

  constructor(private bannerService: BannerService){}

  ngOnInit() {
    this.bannerService.getUserSide(this.categoryId).subscribe(data => this.banners = data);
  }

}
