import {Component, Input, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {Store, select} from '@ngrx/store';
import {getTagListAction} from '../store/action/getTagList.action';
import {
  tagListDataSelector,
  tagListIsLoadingSelector,
} from '../store/selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'mc-tag-list',
  templateUrl: 'tagList.component.html',
  styleUrls: ['tagList.component.scss'],
})
export class TagListComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  tags$!: Observable<Array<string>>;

  constructor(readonly store: Store, readonly router: Router) {}
  ngOnInit(): void {
    this.fetchData();
    this.initializeValue();
  }
  private fetchData() {
    this.store.dispatch(getTagListAction());
  }
  private initializeValue(): void {
    this.tags$ = this.store.pipe(select(tagListDataSelector));
    this.isLoading$ = this.store.pipe(select(tagListIsLoadingSelector));
  }
}
