import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {map, exhaustMap, catchError, tap} from 'rxjs/operators';

import {of} from 'rxjs';

import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from '../actions/getFeed.action';
import {FeedService} from '../../services/feedService';

export const getFeedEffect = createEffect(
  (actions$ = inject(Actions), feedService = inject(FeedService)) => {
    return actions$.pipe(
      ofType(getFeedAction),

      exhaustMap(({slug, options}) => {
        return feedService.getFeed(slug, options).pipe(
          map((feed) => getFeedSuccessAction({feed})),
          catchError(() => {
            return of(getFeedFailureAction());
          })
        );
      })
    );
  },
  {functional: true}
);
