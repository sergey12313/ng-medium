import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticlePreviewComponent} from './components/articlePreview.component';
import {AvatarModule} from '../avatar/avatar.module';
import {NgIconsModule} from '@ng-icons/core';
import {heroHeart} from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [ArticlePreviewComponent],
  exports: [ArticlePreviewComponent],
  providers: [],
  imports: [CommonModule, AvatarModule, NgIconsModule.withIcons({heroHeart})],
})
export class ArticlePreviewModule {}
