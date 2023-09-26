import {Component, Input, OnInit} from '@angular/core';

import {map} from 'rxjs/operators';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Nullable} from 'src/app/shared/types/util.types';
import {isLoggedInSelector} from 'src/app/auth/store/selectors';

@Component({
  selector: 'mc-feed-selector',
  templateUrl: 'feedSelector.component.html',
  styleUrls: ['feedSelector.component.scss'],
})
export class FeedSelectorComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;
  constructor(readonly store: Store) {}
  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedInSelector),
      map((value) => !!value)
    );
  }
  @Input({alias: 'tag'}) tagProps: Nullable<string> = null;
}
