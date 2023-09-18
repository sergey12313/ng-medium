import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeedComponent} from './components/feed.component';

@NgModule({
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [],
})
export class FeedModule {}
