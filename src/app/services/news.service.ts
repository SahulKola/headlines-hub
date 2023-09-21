import { Injectable, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IRoot } from '../interfaces';
import { Observable, Subject, of } from 'rxjs';
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
    'general',
  ];
  constructor(private http: HttpClient) {}

  // apiKey = '&apikey=3a28524c4bdcd6927a65f24a01da97ba';
  // apiKey = '&apikey=e1d511adf953922221c06ffeb20180da';
  apiKey = '&apikey=7383be19432b6f431a6cc47dcb26bc36';

  baseEverythingUrl = 'https://gnews.io/api/v4/search?lang=en&q=';

  baseInUrl = `https://gnews.io/api/v4/top-headlines?lang=en&country=in&category=`;
  fetchIntNews(q: string): Observable<IRoot> {
    const url = `${this.baseEverythingUrl}${q}${this.apiKey}`;
    return this.http.get<IRoot>(url);
  }

  fetchNews(category: string = ''): Observable<IRoot> | Observable<any> {
    const url = `${this.baseInUrl}${category}${this.apiKey}`;
    if (this.categories.includes(category) || category === '') {
      return this.http.get<IRoot>(url);
    } else {
      return of('Not Round');
    }
  }
}
