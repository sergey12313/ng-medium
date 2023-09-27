import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ArticleStateInterface} from './articleState.interface';

export const articleFeatureSelector =
  createFeatureSelector<ArticleStateInterface>('article');

export const articleIsLoadingSelector = createSelector(
  articleFeatureSelector,
  (state) => state.isLoading
);

export const articledDataSelector = createSelector(
  articleFeatureSelector,
  (state) => state.data
);

export const articleErrorSelector = createSelector(
  articleFeatureSelector,
  (state) => state.error
);
