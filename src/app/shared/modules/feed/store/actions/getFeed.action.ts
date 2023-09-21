import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {FeedResponseInterface} from '../../types/feedResponse.Interface';

export const getFeedAction = createAction(
  ActionTypes.GET_FEED,
  props<{slug: string; options?: {limit: number; offset: number}}>()
);
export const getFeedSuccessAction = createAction(
  ActionTypes.GET_FEED_SUCCESS,
  props<{feed: FeedResponseInterface}>()
);

export const getFeedFailureAction = createAction(ActionTypes.GET_FEED_FAILURE);
