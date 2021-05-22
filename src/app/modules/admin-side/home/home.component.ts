import {Component, OnInit, ViewChild} from '@angular/core';
import {ConfigService} from "@services/config.service";
import {Config} from "@shared/interfaces/config";
import {MostPopularAdminComponent} from "@modules/admin-side/most-popular-admin/most-popular-admin.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  config: Config = null;

  @ViewChild(MostPopularAdminComponent) mostPopularAdminComponent: MostPopularAdminComponent;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
  }

  onClick(): void{
    console.log("onClick "
        + this.mostPopularAdminComponent.period + " " +
        this.mostPopularAdminComponent.isShow);

    this.config = {
      period: this.mostPopularAdminComponent.period,
      showMostPopular: this.mostPopularAdminComponent.isShow
    }

    this.configService.sendConfig(this.config).subscribe();
  }
}
