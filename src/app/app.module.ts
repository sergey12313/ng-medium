import {LOCALE_ID, NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {PersistenceService} from './shared/services/persistence.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './shared/services/auth.interceptor';
import {GlobalFeedModule} from './layout/modules/globalFeed/globalFeed.module';
import {TopBarModule} from './layout/modules/topBar/topBar.module';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {TagFeedModule} from './layout/modules/tagFeed/tagFeed.module';
import {UserFeedModule} from './layout/modules/userFeed/userFeed.module';
import {SidebarModule} from './layout/modules/sidebar/sidebar.module';
import {SidebarService} from './layout/modules/sidebar/services/sidebar.service';
import {ArticleModule} from './article/article.module';
import {ArticleService} from './shared/services/articleService';

registerLocaleData(localeRu);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxSkeletonLoaderModule,
    AppRoutingModule,
    TopBarModule,
    GlobalFeedModule,
    TagFeedModule,
    ArticleModule,
    SidebarModule,
    UserFeedModule,
    AuthModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    EffectsModule.forRoot([]),
  ],
  providers: [
    PersistenceService,
    SidebarService,
    ArticleService,
    {provide: LOCALE_ID, useValue: 'ru'},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
