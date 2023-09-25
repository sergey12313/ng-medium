import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {map, exhaustMap, catchError, tap} from 'rxjs/operators';

import {of} from 'rxjs';

import {TagListService} from '../../components/services/tagList.service';
import {
  getTagListAction,
  getTagListFailureAction,
  getTagListSuccessAction,
} from '../action/getTagList.action';

export const getTagListEffect = createEffect(
  (actions$ = inject(Actions), tagListService = inject(TagListService)) => {
    return actions$.pipe(
      ofType(getTagListAction),
      exhaustMap(() => {
        return tagListService.getTagList().pipe(
          map(({tags}) => getTagListSuccessAction({tags})),
          catchError(() => {
            return of(getTagListFailureAction());
          })
        );
      })
    );
  },
  {functional: true}
);
