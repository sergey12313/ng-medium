import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TagListStateInterface} from './tagList.state.interface';

export const tagFeatureSelector =
  createFeatureSelector<TagListStateInterface>('tags');

export const tagListIsLoadingSelector = createSelector(
  tagFeatureSelector,
  (state) => state.isLoading
);

export const tagListDataSelector = createSelector(
  tagFeatureSelector,
  (state) => state.data
);

export const tagListErrorSelector = createSelector(
  tagFeatureSelector,
  (state) => state.error
);
