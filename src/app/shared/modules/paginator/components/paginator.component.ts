import {Component, Input, computed, signal} from '@angular/core';
import {environment} from 'src/environments/environment';

@Component({
  // templateUrl: 'paginator.component.html',
  selector: 'mc-paginator',
  styleUrls: ['paginator.component.scss'],
  template: `<div class="flex justify-between">
    <button class="paginator__arrow" [disabled]="isFirstPage()">
      <ng-icon name="heroArrowLeftMini"></ng-icon> <span>Сюда</span>
    </button>
    <div class="paginator">
      <a *ngFor="let page of leftLinks()" href="#" class="paginator__link">{{
        page
      }}</a>
      <span *ngIf="isNeedLeftDots()">...</span>
      <ng-container *ngFor="let page of paginatorItems()">
        <span
          *ngIf="page === currentPageProp(); else link"
          class="paginator__active-page"
          >{{ page }}</span
        >
        <ng-template #link>
          <a class="paginator__link" [href]="'/' + page">{{
            page
          }}</a></ng-template
        >
      </ng-container>
      <span *ngIf="isNeedRightDots()">...</span>
      <a *ngFor="let page of rightLinks()" href="#" class="paginator__link">{{
        page
      }}</a>
    </div>
    <button class="paginator__arrow" [disabled]="isLastPage()">
      <span>Туда</span><ng-icon name="heroArrowRightMini"></ng-icon>
    </button>
  </div>`,
})
export class PaginatorComponent {
  limit = environment.feedPostLimit;
  pageRangeDisplayed = 5;

  totalProps = signal<number>(1);

  @Input() set total(value: number) {
    this.totalProps.set(value);
  }
  currentPageProp = signal<number>(1);
  @Input() set currentPage(value: number) {
    this.currentPageProp.set(value);
  }

  middleValue = computed(() =>
    Math.min(Math.floor(this.pageRangeDisplayed / 2), this.totalProps())
  );

  totalPages = computed(() => Math.ceil(this.totalProps() / this.limit));

  paginatorItems = computed(() => {
    if (this.total < this.limit) {
      return [1];
    }
    return Array.from(
      {length: this.pageRangeDisplayed},
      (_, index) => index + this.currentPageProp() - this.middleValue()
    )
      .filter((el) => el > 0)
      .filter((el) => el <= this.totalPages());
  });

  leftLinks = computed(() =>
    Array.from({length: this.middleValue()}, (_, index) => index + 1).filter(
      (i) => !this.paginatorItems().includes(i)
    )
  );

  rightLinks = computed(() =>
    Array.from(
      {length: this.middleValue()},
      (_, index) => this.totalPages() - this.middleValue() + index + 1
    ).filter((i) => !this.paginatorItems().includes(i))
  );

  isNeedLeftDots = computed(() => {
    console.log(this.leftLinks());
    if (this.leftLinks().length === 0) {
      return false;
    }
    if (this.leftLinks().slice(-1)[0] + 1 === this.paginatorItems()[0]) {
      return false;
    }
    return true;
  });

  isNeedRightDots = computed(() => {
    if (this.rightLinks().length === 0) {
      return false;
    }
    if (this.rightLinks()[0] - 1 === this.paginatorItems().slice(-1)[0]) {
      return false;
    }
    return true;
  });

  isFirstPage = computed(() => this.currentPageProp() === 1);
  isLastPage = computed(() => this.currentPageProp() === this.totalPages());
}
