import {Component, Input, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';

import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import {Nullable} from 'src/app/shared/types/util.types';
import {getFeedAction} from '../../store/actions/getFeed.action';
import {feedDataSelector, feedTotalCount} from '../../store/selectors';
import {FeedResponseInterface} from '../../types/feedResponse.Interface';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  constructor(
    readonly store: Store,
    readonly router: Router,
    readonly route: ActivatedRoute
  ) {}

  feedData$!: Observable<Nullable<FeedResponseInterface>>;
  totalArticles$!: Observable<Nullable<number>>;
  currentPage$!: Observable<number>;
  baseUrl!: string;

  @Input({alias: 'slug', required: true}) slugProps!: string;

  ngOnInit(): void {
    this.initializeValue();
    this.fetchData();
    this.initializeListeners();
  }
  private fetchData() {
    this.store.dispatch(
      getFeedAction({slug: `${this.slugProps}?limit=10&offset=0`})
    );
  }
  initializeListeners() {
    this.currentPage$ = this.route.queryParamMap.pipe(
      map((param) => {
        const page = param.get('page');
        if (!page || page === '') {
          return 1;
        }
        return Number(page);
      }),
      tap((page) => {
        this.fetchData();
      })
    );
  }

  private initializeValue(): void {
    this.feedData$ = this.store.pipe(select(feedDataSelector));
    this.totalArticles$ = this.store.pipe(select(feedTotalCount));
    this.baseUrl = this.router.url.split('?')[0];
  }
}
