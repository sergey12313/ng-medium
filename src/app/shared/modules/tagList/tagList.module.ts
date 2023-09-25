import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TagListComponent} from './components/tagList.component';
import {TagModule} from '../tag/tag.module';
import * as getTagListEffect from './store/effects/getTagList.effect';
import {EffectsModule} from '@ngrx/effects';
import {tagListReducer} from './store/reducers';
import {StoreModule} from '@ngrx/store';
import {TagListService} from './components/services/tagList.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TagModule,
    EffectsModule.forFeature({...getTagListEffect}),
    StoreModule.forFeature('tags', tagListReducer),
  ],
  declarations: [TagListComponent],
  exports: [TagListComponent],
  providers: [TagListService],
})
export class TagListModule {}
