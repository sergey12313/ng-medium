import {ArticleInterface} from 'src/app/shared/types/article.interface';

export interface FeedResponseInterface {
  articles: Array<ArticleInterface>;
  articlesCount: number;
}
