import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthStateInterface} from '../types/authState.interface';

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (state) => state.isSubmitting
);
export const backendErrorsSelector = createSelector(
  authFeatureSelector,
  (state) => state.validationErrors
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (state) => state.isLoggedIn
);

export const userSelector = createSelector(
  authFeatureSelector,
  (state) => state.currentUser
);
