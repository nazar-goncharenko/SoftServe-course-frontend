import { Component, OnInit } from '@angular/core';
import { ArticleService } from '@services/article.service';
import { Article } from '@shared/interfaces/article';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {PhotoDTO} from '../../../shared/interfaces/photo';
import {PhotoService} from '../../../services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: Article[];
  arrowRightIco = faArrowRight;
  photo: PhotoDTO;

  constructor(private articleService: ArticleService, private photoService) { }

  ngOnInit(): void {
    this.getArticles();
    this.photoService.getPhoto().subscribe(data => this.photo = data);
  }

  getArticles(): void {
    this.articleService.getArticles()
        .subscribe(data => {
          this.articles = data;
        });
  }

}
