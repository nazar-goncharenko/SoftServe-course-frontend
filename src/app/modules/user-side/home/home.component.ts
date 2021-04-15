import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/article.service';
import { Article } from '../../../shared/interfaces/article';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: Article[];
  arrowRightIco = faArrowRight;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
    console.log(this.articles);
  }

  getArticles(): void {
    this.articleService.getArticles()
        .subscribe(data => {
          this.articles = data;
        });
  }
}
