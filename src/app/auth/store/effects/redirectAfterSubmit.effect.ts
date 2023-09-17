import {inject} from '@angular/core';
import {Router} from '@angular/router';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {tap} from 'rxjs';
import {registerSuccessAction} from '../action/register.action';
import {loginSuccessAction} from '../action/login.action';

export const redirectAfterSubmitEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(registerSuccessAction, loginSuccessAction),
      tap(() => {
        router.navigate(['/']);
      })
    );
  },
  {functional: true, dispatch: false}
);
