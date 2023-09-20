import {Component, Input, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';

import {Observable} from 'rxjs';

import {Nullable} from 'src/app/shared/types/util.types';
import {getFeedAction} from '../../store/actions/getFeed.action';
import {feedDataSelector, feedTotalCount} from '../../store/selectors';
import {FeedResponseInterface} from '../../types/feedResponse.Interface';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  constructor(readonly store: Store) {}

  feedData$!: Observable<Nullable<FeedResponseInterface>>;
  totalArticles$!: Observable<Nullable<number>>;

  @Input({alias: 'slug', required: true}) slugProps!: string;

  ngOnInit(): void {
    this.initializeValue();
    this.fetchData();
  }
  private fetchData() {
    this.store.dispatch(
      getFeedAction({slug: `${this.slugProps}?limit=10&offset=0`})
    );
  }

  private initializeValue(): void {
    this.feedData$ = this.store.pipe(select(feedDataSelector));
    this.totalArticles$ = this.store.pipe(select(feedTotalCount));
  }
}
