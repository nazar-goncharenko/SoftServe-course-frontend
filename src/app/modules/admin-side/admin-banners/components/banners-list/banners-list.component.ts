import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Banner, BannerStatusShort} from "../../../../../shared/interfaces/banner";
import {BannerService} from "../../../../../services/banners.service";
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

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
  public keyword: String;
  search = faSearch;
  filter = faFilter;
  isSearch = false;

  constructor(private bannerService: BannerService){}

  ngOnInit() {
    this.bannerService.getBannersByStatus(this.selectedStatus).subscribe(data => this.banners = data);
  }

  selectBannerAt(index: number) {
      this.selectedBannerChanged.emit(this.banners[index]);
  }

  getBannersByStatus(newStatus: string) {
    if (this.selectedStatus !== newStatus) {
      this.selectedStatus = newStatus;
      this.bannerService.getBannersByStatus(newStatus).subscribe(data => this.banners = data);
    }
  }

  searchBanners(keyword: String){
    this.bannerService.bannersSearch(keyword).subscribe(data => this.banners = data );
  }

  get statuses() {
    return ['open', 'closed'];
  }

  configureBanner(banner: Banner) {
      this.bannerService.configureBanner(banner).subscribe(
          data => console.log(data));
  }

  onBannerDeleted(index: number): void {
    this.banners = this.banners.filter((_, i) => i !== index);
    this.selectedBanner = null;
    this.selectedBannerChanged.emit();
  }

  toggleSearch(): void {
    this.isSearch = !this.isSearch;
  }

  sortBy(status: String){
    this.bannerService.sortOpenByStatus(status).subscribe(data => this.banners = data );
  }
}
