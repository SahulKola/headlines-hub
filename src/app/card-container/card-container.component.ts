import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { IArticle, IRoot } from '../interfaces';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css'],
})
export class CardContainerComponent implements OnInit {
  constructor(
    private http: NewsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  articles: IArticle[] = [];
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['search']) {
        this.http.fetchIntNews(params['search']).subscribe((data: IRoot) => {
          console.log(data.articles);
          this.articles = data.articles;
        });
      } else {
        this.route.params.subscribe((params: Params) => {
          this.http.fetchNews(params['type']).subscribe((data: IRoot) => {
            if (data.articles) {
              this.articles = data.articles;
            } else {
              this.router.navigateByUrl('/');
            }
          });
        });
      }
    });
    if (this.router.url === '/') {
      this.http.fetchNews().subscribe((data: IRoot) => {
        this.articles = data.articles;
      });
    }
  }
}
