import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';
import {
  backendErrorsSelector,
  isSubmittingSelector,
} from '../../store/selectors';

import {Nullable} from 'src/app/shared/types/util.types';
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface';
import {LoginRequestInterface} from '../../types/loginRequest.interface';
import {loginAction} from '../../store/action/login.action';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<Nullable<BackendErrorsInterface>>;

  constructor(private formBuilder: FormBuilder, readonly store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValue();
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({
      email: ['serg2@sv-tel.ru'],
      password: ['12345678'],
    });
  }
  initializeValue(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(backendErrorsSelector));
  }

  onSubmit() {
    const request: LoginRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(loginAction({request}));
  }
}
