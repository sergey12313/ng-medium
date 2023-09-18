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
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from './action/getCurrentUser.action';

const initialState: AuthStateInterface = {
  isLoading: false,
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
  }),
  on(getCurrentUserAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getCurrentUserSuccessAction, (state, {currentUser}) => {
    return {
      ...state,
      currentUser,
      isLoggedIn: true,
      isLoading: false,
    };
  }),
  on(getCurrentUserFailureAction, (state) => {
    return {
      ...state,
      isLoggedIn: false,
      isLoading: false,
      currentUser: null,
    };
  })
);
