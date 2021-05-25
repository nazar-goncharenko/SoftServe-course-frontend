import {Component, Input, OnInit} from '@angular/core';
import {Banner} from "@shared/interfaces/banner";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() banner: Banner;

  constructor() { }

  ngOnInit(): void {
  }

}



