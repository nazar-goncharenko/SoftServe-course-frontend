import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Banner} from "../../../../../shared/interfaces/banner";

@Component({
  selector: 'app-banners-list',
  templateUrl: './banners-list.component.html',
  styleUrls: ['./banners-list.component.scss']
})
export class BannersListComponent implements OnInit {

  @Input() banners: Banner[];
  public selectedBanner: Banner;
  @Output() selectedBannerChanged = new EventEmitter<Banner>();

  constructor(){}

  ngOnInit() {
  }

  selectBannerAt(index: number) {
      this.selectedBannerChanged.emit(this.banners[index]);
  }

}
