import {Component, Input} from '@angular/core';
import {ArticleInterface} from 'src/app/shared/types/article.interface';
import {Nullable} from 'src/app/shared/types/util.types';

@Component({
  templateUrl: './articlePreview.component.html',
  styleUrls: ['./articlePreview.component.scss'],
  selector: 'mc-article-preview',
})
export class ArticlePreviewComponent {
  @Input({alias: 'article', required: true}) articleProps!: ArticleInterface;
}
