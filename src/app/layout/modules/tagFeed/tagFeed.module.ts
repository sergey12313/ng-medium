import {NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ActivatedRoute, RouterModule, Routes} from '@angular/router';
import {FeedModule} from 'src/app/shared/modules/feed/feed.module';
import {TagListModule} from 'src/app/shared/modules/tagList/tagList.module';
import {TagFeedComponent} from './components/tagFeed.component';

const routes: Routes = [{path: 'tag/:slug', component: TagFeedComponent}];

@NgModule({
  declarations: [TagFeedComponent],
  providers: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    TagListModule,
  ],
})
export class TagFeedModule {}
