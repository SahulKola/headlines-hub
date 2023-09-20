import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRoot } from '../interfaces';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}
  apiKey = '3d12376c6ca54ee2b35682486a3ed245';
  baseUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.apiKey}`;
  fetchNews(): Observable<IRoot> {
    return this.http.get<IRoot>(this.baseUrl);
  }
}
