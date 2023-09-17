import {createReducer, on} from '@ngrx/store';
import {AuthStateInterface} from '../types/authState.interface';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './action/register.action';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from './action/login.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
};

export const authReducer = createReducer(
  initialState,
  on(registerAction, loginAction, (state) => ({
    ...state,
    isSubmitting: true,
    validationErrors: null,
  })),
  on(registerFailureAction, loginFailureAction, (state, {errors}) => {
    return {
      ...state,
      validationErrors: errors,
      isLoggedIn: false,
      isSubmitting: false,
    };
  }),
  on(registerSuccessAction, loginSuccessAction, (state, {currentUser}) => {
    return {
      ...state,
      currentUser,
      isLoggedIn: true,
      isSubmitting: false,
    };
  })
);
