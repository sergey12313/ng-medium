import {Nullable} from 'src/app/shared/types/util.types';
import {ArticleInterface} from 'src/app/shared/types/article.interface';

export interface ArticleStateInterface {
  isLoading: boolean;
  error: Nullable<string>;
  data: Nullable<ArticleInterface>;
}
