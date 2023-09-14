import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store, select} from '@ngrx/store';
import {registerAction} from '../../store/action/register.action';
import {Observable} from 'rxjs';
import {isSubmittingSelector} from '../../store/selectors';
import {AuthService} from '../../services/auth.service';
import {RegisterRequestInterface} from '../../types/registerRequest.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;

  constructor(private formBuilder: FormBuilder, readonly store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValue();
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({
      username: ['123'],
      email: ['123'],
      password: ['123'],
    });
  }
  initializeValue(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  onSubmit() {
    console.log(this.form.value);
    const request: RegisterRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(registerAction({request}));
  }
}
