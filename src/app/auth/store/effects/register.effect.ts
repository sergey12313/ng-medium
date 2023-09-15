import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../../services/auth.service';
import {environment} from 'src/environments/environment';
import {map, exhaustMap, catchError, tap} from 'rxjs/operators';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../action/register.action';
import {of} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {PersistenceService} from 'src/app/shared/service/persistence.service';

export const registerEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persistenceService = inject(PersistenceService)
  ) => {
    return actions$.pipe(
      ofType(registerAction),
      map((action) => action.request),
      exhaustMap((request) => {
        return authService.register(request).pipe(
          map((currentUser) => {
            persistenceService.set(
              environment.localStorageTokenKey,
              currentUser.token
            );
            return registerSuccessAction({currentUser});
          }),
          catchError((errorsResponse: HttpErrorResponse) => {
            return of(registerFailureAction(errorsResponse.error));
          })
        );
      })
    );
  },
  {functional: true}
);
