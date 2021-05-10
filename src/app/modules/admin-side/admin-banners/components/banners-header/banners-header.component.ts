import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-banners-header',
  templateUrl: './banners-header.component.html',
  styleUrls: ['./banners-header.component.scss']
})
export class BannersHeaderComponent implements OnInit {
  @Output() addBanner: EventEmitter<any> = new EventEmitter<any>();

  onButtonClick() {
    this.addBanner.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
