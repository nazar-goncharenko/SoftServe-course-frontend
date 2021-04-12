import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Banner} from "../../../../../shared/interfaces/banner";



@Component({
  selector: 'app-banner-item',
  templateUrl: './banner-item.component.html',
  styleUrls: ['./banner-item.component.scss']
})
export class BannerItemComponent implements OnInit {
  @Input() banner: Banner;
  constructor() { }

  ngOnInit(): void {
  }

}
