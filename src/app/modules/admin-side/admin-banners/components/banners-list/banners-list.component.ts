import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Banner, BannerStatusShort} from "../../../../../shared/interfaces/banner";
import {BannerService} from "../../../../../services/banners.service";

@Component({
  selector: 'app-banners-list',
  templateUrl: './banners-list.component.html',
  styleUrls: ['./banners-list.component.scss']
})
export class BannersListComponent implements OnInit {

  @Input() banners: Banner[];
  public selectedBanner: Banner;
  @Output() selectedBannerChanged = new EventEmitter<Banner>();
  selectedStatus = 'open';

  constructor(private bannerService: BannerService){}

  ngOnInit() {
  }

  selectBannerAt(index: number) {
      this.selectedBannerChanged.emit(this.banners[index]);
  }

  getBannersByStatus(newStatus: BannerStatusShort) {
    if (this.selectedStatus !== newStatus) {
      this.selectedStatus = newStatus;
      this.bannerService.getBannersByStatus(newStatus).subscribe(data => this.banners = data);
    }
  }

  get statuses() {
    const result = [];
    for(let option in BannerStatusShort) {
      result.push({key: option, value: BannerStatusShort[option]});
    }

    return result;
  }

  configureBanner(banner: Banner) {
      this.bannerService.configureBanner(banner).subscribe(
          data => console.log(data));
  }
}
