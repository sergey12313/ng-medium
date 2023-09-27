import {createReducer, on} from '@ngrx/store';

import {ArticleStateInterface} from './articleState.interface';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from './actions/getArticle.action';

const initialState: ArticleStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

export const articleReducer = createReducer(
  initialState,
  on(getArticleAction, (state) => ({
    data: null,
    isLoading: true,
    error: null,
  })),
  on(getArticleSuccessAction, (state, {article}) => ({
    isLoading: false,
    error: null,
    data: article,
  })),
  on(getArticleFailureAction, (state) => ({
    ...state,
    isLoading: false,
    error: 'error',
  }))
);
