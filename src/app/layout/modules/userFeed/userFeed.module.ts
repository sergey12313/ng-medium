import {NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FeedModule} from 'src/app/shared/modules/feed/feed.module';
import {TagListModule} from 'src/app/shared/modules/tagList/tagList.module';
import {UserFeedComponent} from './components/userFeed.component';
import {FeedSelectorModule} from 'src/app/shared/modules/feedSelector/feedSelector.module';

const routes: Routes = [{path: 'feed', component: UserFeedComponent}];

@NgModule({
  declarations: [UserFeedComponent],
  providers: [],
  imports: [
    CommonModule,
    FeedModule,
    FeedSelectorModule,
    TagListModule,
    RouterModule.forChild(routes),
  ],
})
export class UserFeedModule {}
