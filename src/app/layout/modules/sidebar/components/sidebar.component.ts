import {Component, Input} from '@angular/core';
import {SidebarService} from '../services/sidebar.service';
import {Store, select} from '@ngrx/store';
import {Observable, Subscription, map} from 'rxjs';
import {isLoggedInSelector, userSelector} from 'src/app/auth/store/selectors';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {Nullable} from 'src/app/shared/types/util.types';

@Component({
  selector: 'mc-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  isLoggedIn$!: Observable<boolean>;
  currentUserSub!: Subscription;

  currentUser: Nullable<CurrentUserInterface> = null;
  constructor(readonly store: Store, readonly sidebarService: SidebarService) {}
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
  outsideHandler() {
    if (this.sidebarService.isOpened) {
      this.sidebarService.close();
    }
  }
}
