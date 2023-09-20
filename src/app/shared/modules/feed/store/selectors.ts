import {createFeatureSelector, createSelector} from '@ngrx/store';
import {FeedStateInterface} from './feedState.interface';

export const feedFeatureSelector =
  createFeatureSelector<FeedStateInterface>('feed');

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (state) => state.isLoading
);

export const feedDataSelector = createSelector(
  feedFeatureSelector,
  (state) => state.data
);

export const feedErrorSelector = createSelector(
  feedFeatureSelector,
  (state) => state.error
);
export const feedTotalCount = createSelector(
  feedFeatureSelector,
  (state) => state.data?.articlesCount ?? null
);
