import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';

export const getTagListAction = createAction(ActionTypes.GET_TAG_LIST);
export const getTagListSuccessAction = createAction(
  ActionTypes.GET_TAG_LIST_SUCCESS,
  props<{tags: Array<string>}>()
);

export const getTagListFailureAction = createAction(
  ActionTypes.GET_TAG_LIST_FAILURE
);
