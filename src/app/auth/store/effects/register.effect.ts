import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../../services/auth.service';
import {map, exhaustMap, catchError, tap} from 'rxjs/operators';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../action/register.action';
import {of} from 'rxjs';

export const registerEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(registerAction),
      map((action) => action.request),
      exhaustMap((request) => {
        return authService.register(request).pipe(
          map((currentUser) => registerSuccessAction({currentUser})),
          catchError(() => of(registerFailureAction()))
        );
      })
    );
  },
  {functional: true}
);
