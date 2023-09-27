import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {ArticleInterface} from '../types/article.interface';
import {ArticleResponseInterface} from '../types/articleResponse.interface';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = environment.apiUrl + 'articles/' + slug;
    return this.http
      .get<ArticleResponseInterface>(fullUrl)
      .pipe(map(({article}) => article));
  }
}
