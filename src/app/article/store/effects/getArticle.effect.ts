import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {map, exhaustMap, catchError, tap} from 'rxjs/operators';

import {of} from 'rxjs';

import {ArticleService} from 'src/app/shared/services/articleService';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '../actions/getArticle.action';

export const getArticleEffect = createEffect(
  (actions$ = inject(Actions), articleService = inject(ArticleService)) => {
    return actions$.pipe(
      ofType(getArticleAction),

      exhaustMap(({slug}) => {
        return articleService.getArticle(slug).pipe(
          map((article) => getArticleSuccessAction({article})),
          catchError(() => {
            return of(getArticleFailureAction());
          })
        );
      })
    );
  },
  {functional: true}
);
