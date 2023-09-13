import {createReducer, on} from '@ngrx/store';
import {AuthStateInterface} from '../types/authState.interface';
import {registerAction} from './action/register.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

export const authReducer = createReducer(
  initialState,
  on(registerAction, (state) => ({
    ...state,
    isSubmitting: true,
  }))
);
