import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {isLoggedInSelector, userSelector} from 'src/app/auth/store/selectors';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {Nullable} from 'src/app/shared/types/util.types';

@Component({
  selector: 'app-top-bar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss'],
})
export class TopBarComponent implements OnInit, OnDestroy {
  isLoggedIn$!: Observable<boolean>;
  currentUserSub!: Subscription;

  currentUser: Nullable<CurrentUserInterface> = null;

  constructor(readonly store: Store) {}
  ngOnDestroy(): void {
    this.currentUserSub.unsubscribe();
  }
  ngOnInit(): void {
    this.initializeValue();
  }

  initializeValue(): void {
    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedInSelector),
      map((value) => !!value)
    );
    this.currentUserSub = this.store
      .pipe(select(userSelector))
      .subscribe((value) => {
        this.currentUser = value;
      });
  }
}
