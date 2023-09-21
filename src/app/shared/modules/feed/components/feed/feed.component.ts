import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';

import {Observable, Subscription} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import {Nullable} from 'src/app/shared/types/util.types';
import {getFeedAction} from '../../store/actions/getFeed.action';
import {
  feedDataSelector,
  feedIsLoadingSelector,
  feedTotalCount,
} from '../../store/selectors';
import {FeedResponseInterface} from '../../types/feedResponse.Interface';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  constructor(
    readonly store: Store,
    readonly router: Router,
    readonly route: ActivatedRoute
  ) {}

  ngOnDestroy(): void {
    this.currentPageSub.unsubscribe();
  }

  limit = environment.feedPostLimit;
  feedData$!: Observable<Nullable<FeedResponseInterface>>;
  totalArticles$!: Observable<Nullable<number>>;
  currentPage!: number;
  baseUrl!: string;
  isLoading$!: Observable<boolean>;
  currentPageSub!: Subscription;

  @Input({alias: 'slug', required: true}) slugProps!: string;

  ngOnInit(): void {
    this.initializeValue();
    this.initializeListeners();
  }
  private fetchData() {
    const offset = this.limit * this.currentPage - this.limit;
    this.store.dispatch(
      getFeedAction({
        slug: this.slugProps,
        options: {limit: this.limit, offset},
      })
    );
  }
  initializeListeners() {
    this.currentPageSub = this.route.queryParamMap
      .pipe(
        map((param) => {
          const page = param.get('page');
          if (!page || page === '') {
            return 1;
          }
          return Number(page);
        })
      )
      .subscribe((page) => {
        this.currentPage = page;
        this.fetchData();
      });
  }

  private initializeValue(): void {
    this.feedData$ = this.store.pipe(select(feedDataSelector));
    this.totalArticles$ = this.store.pipe(select(feedTotalCount));
    this.isLoading$ = this.store.pipe(select(feedIsLoadingSelector));

    this.baseUrl = this.router.url.split('?')[0];
  }
}
