import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {PaginatorComponent} from './components/paginator.component';
import {NgIconsModule} from '@ng-icons/core';
import {heroArrowLeftMini, heroArrowRightMini} from '@ng-icons/heroicons/mini';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NgIconsModule.withIcons({heroArrowLeftMini, heroArrowRightMini}),
    RouterModule,
  ],
  declarations: [PaginatorComponent],
  exports: [PaginatorComponent],
})
export class PaginatorModule {}
