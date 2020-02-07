import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/articles';

@Component({
  selector: 'wild-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor() { }

  redTitle = false;

  @Input()
  articles: Article[];

  liked(index: number): void {
    this.articles[index].likeCount ++;
  }
  ngOnInit() {
  }

}
