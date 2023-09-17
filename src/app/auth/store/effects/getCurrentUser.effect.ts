import {HttpErrorResponse} from '@angular/common/http';
import {inject} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {map, exhaustMap, catchError, of} from 'rxjs';
import {PersistenceService} from 'src/app/shared/service/persistence.service';
import {environment} from 'src/environments/environment';
import {AuthService} from '../../services/auth.service';
import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
} from '../action/login.action';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserTokenNotFoundAction,
} from '../action/getCurrentUser';

export const getCurrentUserEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persistenceService = inject(PersistenceService)
  ) => {
    return actions$.pipe(
      ofType(getCurrentUserAction),
      exhaustMap((request) => {
        const token = persistenceService.get(environment.localStorageTokenKey);
        if (!token) {
          return of(getCurrentUserTokenNotFoundAction());
        }
        return authService.getCurrentUser(token).pipe(
          map((currentUser) => {
            persistenceService.set(
              environment.localStorageTokenKey,
              currentUser.token
            );
            console.log(currentUser);
            return loginSuccessAction({currentUser});
          }),
          catchError(() => {
            return of(getCurrentUserFailureAction());
          })
        );
      })
    );
  },
  {functional: true}
);
