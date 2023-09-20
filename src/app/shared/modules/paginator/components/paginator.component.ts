import {Component, Input} from '@angular/core';

@Component({
  // templateUrl: 'paginator.component.html',
  selector: 'mc-paginator',
  styleUrls: ['paginator.component.scss'],
  template: `<div class="flex justify-between">
    <button class="paginator__arrow" [disabled]="isFirst">
      <ng-icon name="heroArrowLeftMini"></ng-icon> <span>Сюда</span>
    </button>
    <div class="paginator">
      <a *ngFor="let page of startLinks" href="#" class="paginator__link">{{
        page
      }}</a>
      <span *ngIf="isStartDots">...</span>
      <ng-container *ngFor="let page of paginatorItems">
        <span
          *ngIf="page === currentPage; else link"
          class="paginator__active-page"
          >{{ page }}</span
        >
        <ng-template #link>
          <a class="paginator__link" [href]="'/' + page">{{
            page
          }}</a></ng-template
        >
      </ng-container>
      <span *ngIf="isEndDots">...</span>
      <a *ngFor="let page of endLinks" href="#" class="paginator__link">{{
        page
      }}</a>
    </div>
    <button class="paginator__arrow" [disabled]="isLast">
      <span>Туда</span><ng-icon name="heroArrowRightMini"></ng-icon>
    </button>
  </div>`,
})
export class PaginatorComponent {
  total = 500;
  limit = 10;
  currentPage = 1;

  count = 5;

  get totalPages() {
    return Math.ceil(this.total / this.limit);
  }

  get middleValue() {
    return Math.floor(this.count / 2);
  }

  get paginatorItems(): Array<number> {
    if (this.total < this.limit) {
      return [1];
    }
    return Array.from(
      {length: this.count},
      (_, index) => index + this.currentPage - this.middleValue
    )
      .filter((el) => el > 0)
      .filter((el) => el <= this.totalPages);
  }

  get startLinks(): Array<number> {
    const items = Array.from(
      {length: this.middleValue},
      (_, index) => index + 1
    ).filter((i) => !this.paginatorItems.includes(i));
    return items;
  }
  get isStartDots() {
    if (this.startLinks.length === 0) {
      return false;
    }
    if (this.startLinks.slice(-1)[0] + 1 === this.paginatorItems[0]) {
      return false;
    }
    return true;
  }

  get isFirst() {
    return this.currentPage === 1;
  }
  get isLast() {
    return this.currentPage === this.totalPages;
  }

  get endLinks(): Array<number> {
    const items = Array.from(
      {length: this.middleValue},
      (_, index) => this.totalPages - this.middleValue + index + 1
    ).filter((i) => !this.paginatorItems.includes(i));
    return items;
  }

  get isEndDots() {
    if (this.endLinks.length === 0) {
      return false;
    }
    if (this.endLinks[0] - 1 === this.paginatorItems.slice(-1)[0]) {
      return false;
    }
    return true;
  }
}
