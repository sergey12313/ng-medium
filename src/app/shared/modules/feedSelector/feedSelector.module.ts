import {CommonModule} from '@angular/common';
import {FeedSelectorComponent} from './components/feedSelector.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FeedSelectorComponent],
  exports: [FeedSelectorComponent],
})
export class FeedSelectorModule {}
