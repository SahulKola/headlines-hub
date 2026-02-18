import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { IRoot } from '../interfaces';
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  categories: string[] = [
    'health',
    'entertainment',
    'technology',
    'science',
    'business',
    'sports',
    'world',
    'nation',
  ];
  constructor(private http: HttpClient) {}
  baseURL = 'https://gnews.io/api/v4/search?lang=en&q=';

  baseURL_IN = `https://gnews.io/api/v4/top-headlines?lang=en&country=in&category=`;
  fetchIntNews(q: string): Observable<IRoot> {
    const url = `${this.baseURL}${q}`;
    return this.http.get<IRoot>(url);
  }

  fetchNews(category: string = ''): Observable<IRoot> | Observable<any> {
    const url = `${this.baseURL_IN}${category}`;
    if (this.categories.includes(category) || category === '') {
      return this.http.get<IRoot>(url);
    } else {
      return of('Not Found');
    }
  }
}
