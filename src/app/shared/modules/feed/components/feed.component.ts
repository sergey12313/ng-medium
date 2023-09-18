import {Component, Input, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {getFeedAction} from '../store/actions/getFeed.action';
import {Observable} from 'rxjs';
import {feedDataSelector} from '../store/selectors';
import {Nullable} from 'src/app/shared/types/util.types';
import {FeedResponseInterface} from '../types/feedResponse.Interface';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  constructor(readonly store: Store) {}

  feedData$!: Observable<Nullable<FeedResponseInterface>>;

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
  }
}
