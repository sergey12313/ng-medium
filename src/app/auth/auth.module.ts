import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './components/register/register.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {authReducer} from './store/reducer';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';

import * as registerEffect from './store/effects/register.effect';
import * as loginEffect from './store/effects/login.effect';
import * as redirectAfterSubmit from './store/effects/redirectAfterSubmit.effect';
import * as getCurrentUser from './store/effects/getCurrentUser.effect';
import {BackendErrorMessageModule} from '../shared/modules/backendErrorMessages/backendErrorMessages.module';
import {PersistenceService} from '../shared/services/persistence.service';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistenceService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
    HttpClientModule,
    BackendErrorMessageModule,
    EffectsModule.forFeature({
      ...registerEffect,
      ...loginEffect,
      ...redirectAfterSubmit,
      ...getCurrentUser,
    }),
  ],
})
export class AuthModule {}
