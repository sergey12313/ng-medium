import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {TagListResponseInterface} from '../../types/tagListResponse.interface';

@Injectable()
export class TagListService {
  constructor(private http: HttpClient) {}

  getTagList() {
    return this.http.get<TagListResponseInterface>(environment.apiUrl + 'tags');
  }
}
