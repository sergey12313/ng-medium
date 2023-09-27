import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../../services/auth.service';
import {environment} from 'src/environments/environment';
import {map, exhaustMap, catchError, tap} from 'rxjs/operators';

import {of} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {PersistenceService} from 'src/app/shared/services/persistence.service';

import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from '../action/login.action';

export const loginEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persistenceService = inject(PersistenceService)
  ) => {
    return actions$.pipe(
      ofType(loginAction),
      map((action) => action.request),
      exhaustMap((request) => {
        return authService.login(request).pipe(
          map((currentUser) => {
            persistenceService.set(
              environment.localStorageTokenKey,
              currentUser.token
            );
            console.log(currentUser);
            return loginSuccessAction({currentUser});
          }),
          catchError((errorsResponse: HttpErrorResponse) => {
            return of(loginFailureAction(errorsResponse.error));
          })
        );
      })
    );
  },
  {functional: true}
);
