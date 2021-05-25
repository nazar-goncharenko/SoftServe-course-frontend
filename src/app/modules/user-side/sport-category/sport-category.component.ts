import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Article} from "@shared/interfaces/article";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {ArticleService} from "@services/article.service";

@Component({
  selector: 'app-sport-category',
  templateUrl: './sport-category.component.html',
  styleUrls: ['./sport-category.component.scss']
})
export class SportCategoryComponent implements OnInit {

  articles: Article[];
  arrowRightIco = faArrowRight;

  constructor(public activatedRoute: ActivatedRoute,
              private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getArticles()
        .subscribe(data => {
          this.articles = data;
        });
  }

}
