import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {FeedResponseInterface} from '../types/feedResponse.Interface';

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(slug: string) {
    const fullUrl = environment.apiUrl + slug;
    return this.http.get<FeedResponseInterface>(fullUrl);
  }
}
