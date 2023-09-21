import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EffectsModule} from '@ngrx/effects';
import * as getUserEffect from './store/effects/getFeed.effect';
import {FeedService} from './services/feedService';
import {StoreModule} from '@ngrx/store';
import {feedReducer} from './store/reducer';
import {FeedComponent} from './components/feed/feed.component';
import {ArticlePreviewModule} from '../articlePreview/articlePreview.module';
import {PaginatorModule} from '../paginator/paginator.module';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {FeedSkeletonComponent} from './components/skeleton/feedSkeleton.component';

@NgModule({
  declarations: [FeedComponent, FeedSkeletonComponent],
  exports: [FeedComponent],
  providers: [FeedService],
  imports: [
    CommonModule,
    ArticlePreviewModule,
    PaginatorModule,
    NgxSkeletonLoaderModule,
    EffectsModule.forFeature({...getUserEffect}),
    StoreModule.forFeature('feed', feedReducer),
  ],
})
export class FeedModule {}
