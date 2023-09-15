import {createReducer, on} from '@ngrx/store';
import {AuthStateInterface} from '../types/authState.interface';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './action/register.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
};

export const authReducer = createReducer(
  initialState,
  on(registerAction, (state) => ({
    ...state,
    isSubmitting: true,
    validationErrors: null,
  })),
  on(registerFailureAction, (state, {errors}) => {
    return {
      ...state,
      validationErrors: errors,
      isLoggedIn: false,
      isSubmitting: false,
    };
  }),
  on(registerSuccessAction, (state, {currentUser}) => {
    return {
      ...state,
      currentUser,
      isLoggedIn: true,
      isSubmitting: false,
    };
  })
);
