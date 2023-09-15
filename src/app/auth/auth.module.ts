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
import {registerEffect} from './store/effects/register.effect';
import * as authEffects from './store/effects/register.effect';
import {BackendErrorMessageModule} from '../shared/modules/backendErrorMessages/backendErrorMessages.module';
import {PersistenceService} from '../shared/service/persistence.service';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [RegisterComponent],
  providers: [AuthService, PersistenceService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
    HttpClientModule,
    BackendErrorMessageModule,
    EffectsModule.forFeature(authEffects),
  ],
})
export class AuthModule {}
