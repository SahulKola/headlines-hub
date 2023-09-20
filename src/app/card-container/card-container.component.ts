import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { IArticle, IRoot } from '../interfaces';
@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css'],
})
export class CardContainerComponent implements OnInit {
  constructor(private http: NewsService) {}
  articles: IArticle[] = [];
  ngOnInit(): void {
    this.http.fetchNews().subscribe((data: IRoot) => {
      this.articles = data.articles;
    });
  }
}
