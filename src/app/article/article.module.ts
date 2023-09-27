import {RouterModule, Routes} from '@angular/router';
import {ArticleComponent} from './components/article.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarModule} from '../shared/modules/avatar/avatar.module';
import {heroHeart, heroPlus} from '@ng-icons/heroicons/outline';
import {NgIconsModule} from '@ng-icons/core';
import {ReplaceLineBreaks} from '../shared/pipes/replaceLineBreaks.pipe';
import {TagModule} from '../shared/modules/tag/tag.module';
const routes: Routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];
@NgModule({
  declarations: [ArticleComponent, ReplaceLineBreaks],
  providers: [],
  imports: [
    CommonModule,
    AvatarModule,
    TagModule,
    RouterModule.forChild(routes),
    NgIconsModule.withIcons({heroHeart, heroPlus}),
  ],
})
export class ArticleModule {}
