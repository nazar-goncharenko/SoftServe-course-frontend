import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Article} from "@shared/interfaces/article";
import {MostPopularCommentedService} from "@services/most-popular-commented.service";
import {ConfigService} from "@services/config.service";
import {Config} from "@shared/interfaces/config";

@Component({
  selector: 'app-most-popular-user',
  templateUrl: './most-popular-user.component.html',
  styleUrls: ['./most-popular-user.component.scss']
})
export class MostPopularUserComponent implements OnInit, OnChanges {

  articles: Article[];
  @Input() location: string;
  isShow:boolean;
  config: Config;

  constructor(private mostPopularCommentedService:MostPopularCommentedService,
              private configService: ConfigService) { }

  ngOnInit(): void {
    this.mostPopularShow();
    this.config = this.configService.configuration();
    this.isShow = this.config.showMostPopular;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges " + this.articles)
    this.mostPopularShow();
    this.config = this.configService.configuration();
    this.isShow = this.config.showMostPopular;
  }

  mostPopularShow(): void{
    this.mostPopularCommentedService.getTopThreeArticle(this.location)
        .subscribe(data => this.articles = data);
  }
}
