import {Injectable} from '@angular/core';
import {RegisterRequestInterface} from '../types/registerRequest.interface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {AuthResponseInterface} from '../types/authResponse.interface';
import {LoginRequestInterface} from '../types/loginRequest.interface';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  private getUserFromResponse(
    response: AuthResponseInterface
  ): CurrentUserInterface {
    return response.user;
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    return this.httpClient
      .post<AuthResponseInterface>(`${environment.apiUrl}users`, data)
      .pipe(map(this.getUserFromResponse));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    return this.httpClient
      .post<AuthResponseInterface>(`${environment.apiUrl}users/login`, data)
      .pipe(map(this.getUserFromResponse));
  }

  getCurrentUser() {
    return this.httpClient
      .get<AuthResponseInterface>(`${environment.apiUrl}user`)
      .pipe(map(this.getUserFromResponse));
  }
}
