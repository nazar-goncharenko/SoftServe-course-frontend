import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Article} from "@shared/interfaces/article";
import {MostPopularCommentedService} from "@services/most-popular-commented.service";

@Component({
  selector: 'app-most-popular-user',
  templateUrl: './most-popular-user.component.html',
  styleUrls: ['./most-popular-user.component.scss']
})
export class MostPopularUserComponent implements OnInit, OnChanges {

  articles: Article[];
  @Input() location: string;

  constructor(private mostPopularCommentedService:MostPopularCommentedService) { }

  ngOnInit(): void {
    this.mostPopularShow();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges " + this.articles)
    this.mostPopularShow();
  }

  mostPopularShow(): void{
    this.mostPopularCommentedService.getTopThreeArticle(this.location)
        .subscribe(data => this.articles = data);
  }
}
