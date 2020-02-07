import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wild-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  content: string;

  @Input()
  likeCount: number;

  @Output()
  liked = new EventEmitter<string>();

  clicked(): void {
    this.liked.emit('article liked');
  }
  constructor() { }

  ngOnInit() {
  }

}
