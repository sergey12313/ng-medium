import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {getFeedAction} from '../store/actions/getFeed.action';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  constructor(readonly store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(getFeedAction({slug: 'articles?limit=10&offset=0'}));
  }
}
