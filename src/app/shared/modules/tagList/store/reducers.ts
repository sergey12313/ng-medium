import {createReducer, on} from '@ngrx/store';
import {TagListStateInterface} from './tagList.state.interface';
import {
  getTagListAction,
  getTagListFailureAction,
  getTagListSuccessAction,
} from './action/getTagList.action';

const initialState: TagListStateInterface = {
  isLoading: false,
  error: null,
  data: [],
};

export const tagListReducer = createReducer(
  initialState,
  on(getTagListAction, () => ({
    data: initialState.data,
    isLoading: true,
    error: null,
  })),
  on(getTagListSuccessAction, (_, {tags}) => ({
    isLoading: false,
    error: null,
    data: tags,
  })),
  on(getTagListFailureAction, (state) => ({
    ...state,
    isLoading: false,
    error: 'error',
  }))
);
