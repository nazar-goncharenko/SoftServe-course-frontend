import { Component, OnInit } from '@angular/core';
import {MostPopularCommentedService} from "@services/most-popular-commented.service";
import {ConfigService} from "@services/config.service";
import {Config} from "@shared/interfaces/config";

@Component({
  selector: 'app-most-popular-admin',
  templateUrl: './most-popular-admin.component.html',
  styleUrls: ['./most-popular-admin.component.scss']
})
export class MostPopularAdminComponent implements OnInit {

  config: Config;
  isShow: boolean;
  period: string;
  periodV: string;

  constructor(private mostPopularCommentedService:MostPopularCommentedService,
              private configService: ConfigService) { }

  ngOnInit(): void {
    console.log("ngOnInit-start")
    this.config = this.configService.configuration();
    this.isShow = this.config.showMostPopular;
    this.period = this.config.period;
    this.periodV = this.mostPopularCommentedService.reformPeriod(this.config.period);
    console.log("ngOnInit-end " + this.periodV + " " + this.isShow);
  }

  toggleShow(): void{
    console.log("toggleShow " + !this.isShow)
    this.isShow = !this.isShow;
  }

  changePeriod(value: string): void{
    switch(value) {
      case "period-1":
        this.period = "Day";
        break;
      case "period-2":
        this.period = "Week";
        break;
      case "period-3":
        this.period = "Month";
        break;
      case "period-4":
        this.period = "Year";
        break;
    }
    this.periodV = this.mostPopularCommentedService.reformPeriod(this.period);
    console.log("changePeriod " + this.period);
  }
}
