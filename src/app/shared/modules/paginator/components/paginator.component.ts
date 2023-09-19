import {Component, Input} from '@angular/core';

@Component({
  // templateUrl: 'paginator.component.html',
  selector: 'mc-paginator',
  template: `<div>
    <div class="inline-flex gap-2 items-center">
      <ng-container *ngFor="let page of paginatorItems">
        <span
          *ngIf="page === currentPage; else span"
          class="border-primary border p-1 min-w-[30px] text-center rounded text-primary"
          >{{ page }}</span
        >
        <ng-template #span>
          <a class="hover:text-primary" [href]="'/' + page">{{
            page
          }}</a></ng-template
        >
      </ng-container>
    </div>
    <!-- <a
      *ngFor="let page of arr"
      href="#"
      class="text-primary inline-block p-2 border-primary rounded"
      [class]="{'border ': page === currentPage}"
      >{{ page }}</a
    > -->
  </div>`,
})
export class PaginatorComponent {
  total = 221;
  limit = 10;
  currentPage = 3;

  count = 5;

  get totalPages() {
    return Math.ceil(this.total / this.limit);
  }
  // totalPage = 10;

  get paginatorItems(): Array<number> {
    if (this.total < this.limit) {
      return [1];
    }
    const middle = Math.floor(this.count / 2);
    const result = Array.from(
      {length: this.count},
      (_, index) => index + this.currentPage - middle
    )
      .filter((el) => el > 0)
      .filter((el) => el <= this.totalPages);
    // .map((el) => ({
    //   type: el === this.currentPage ? ('span' as const) : ('a' as const),
    //   value: String(el),
    // }));

    return result;
  }
  // get startLinks(): number {
  //   if(this.paginatorItems[0])
  // }

  // pages =
}
