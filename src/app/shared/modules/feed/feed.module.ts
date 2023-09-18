import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeedComponent} from './components/feed.component';
import {EffectsModule} from '@ngrx/effects';
import * as getUserEffect from './store/effects/getFeed.effect';
import {FeedService} from './services/feedService';
import {StoreModule} from '@ngrx/store';
import {feedReducer} from './store/reducer';

@NgModule({
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
  imports: [
    CommonModule,
    EffectsModule.forFeature({...getUserEffect}),
    StoreModule.forFeature('feed', feedReducer),
  ],
})
export class FeedModule {}
