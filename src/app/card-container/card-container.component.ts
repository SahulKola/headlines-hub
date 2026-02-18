import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { delay, tap } from 'rxjs';
import { IArticle, IRoot } from '../interfaces';
import { NewsService } from '../services/news.service';
@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css'],
})
export class CardContainerComponent implements OnInit {
  loaderQuotes = [
    'Facts over noise....',
    'Your news, your way.....',
    'News that matters.....',
    'Discover the world in headlines.....',
    'Today’s headlines shape tomorrow....',
  ];
  randomIndex = 0;
  constructor(
    private http: NewsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  articles: IArticle[] = [];
  ngOnInit(): void {
    this.route.queryParams
      .pipe(tap(() => (this.randomIndex = this.getRandIndex())))
      .subscribe((params: Params) => {
        if (params['search']) {
          this.http
            .fetchIntNews(params['search'])
            .pipe(delay(2000))
            .subscribe((data: IRoot) => {
              this.articles = data.articles;
            });
        } else if (this.router.url === '/') {
          this.http.fetchNews().subscribe((data: IRoot) => {
            this.articles = data.articles;
          });
        } else {
          this.route.params
            .pipe(tap(() => (this.randomIndex = this.getRandIndex())))
            .subscribe((params: Params) => {
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
  }
  getRandIndex() {
    return Math.floor(Math.random() * this.loaderQuotes.length);
  }
}
