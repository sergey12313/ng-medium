import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {GlobalFeedComponent} from './components/globalFeed.component';
import {FeedModule} from 'src/app/shared/modules/feed/feed.module';

const routes: Routes = [{path: '', component: GlobalFeedComponent}];

@NgModule({
  declarations: [GlobalFeedComponent],
  providers: [],
  imports: [CommonModule, RouterModule.forChild(routes), FeedModule],
})
export class GlobalFeedModule {}
