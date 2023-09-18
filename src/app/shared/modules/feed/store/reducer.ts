import {createReducer, on} from '@ngrx/store';
import {FeedStateInterface} from './feedState.interface';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from './actions/getFeed.action';

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

export const feedReducer = createReducer(
  initialState,
  on(getFeedAction, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(getFeedSuccessAction, (state, {feed}) => ({
    isLoading: false,
    error: null,
    data: feed,
  })),
  on(getFeedFailureAction, (state) => ({
    ...state,
    isLoading: false,
    error: 'error',
  }))
);
