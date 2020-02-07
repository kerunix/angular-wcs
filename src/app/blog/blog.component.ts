import { Component, OnInit, Input } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from 'src/models/articles';

@Component({
  selector: 'wild-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private articlesService: ArticlesService) { }

  @Input()
  topic: string;

  articles: Article[];

  ngOnInit() {
    this.articlesService.getArticles().subscribe(
      (articles: Article[]) => {
        this.articles = articles;
      }
    );
  }
}
