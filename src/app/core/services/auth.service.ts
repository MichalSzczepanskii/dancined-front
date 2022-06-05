import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginDataModel} from '../models/login-data.model';
import {environment} from '../../../environments/environment';
import {Observable, tap} from 'rxjs';
import {AuthResultModel} from '../models/auth-result.model';
import {SessionEnum} from '../constants/session.enum';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly BASE_URL = environment.apiUrl + 'auth';

  constructor(private http: HttpClient) { }

  login(credentials: LoginDataModel): Observable<any> {
    return this.http.post(`${this.BASE_URL}/login`,
      {
        email: credentials.email,
        password: credentials.password,
        remember_me: credentials.rememberMe
      }
    ).pipe(
      tap(res => this.setSession(res as AuthResultModel))
    );
  }

  private setSession(authResult: AuthResultModel): void {
    const expiresAt = moment().add(authResult.expires_in, 'second');
    localStorage.setItem(SessionEnum.TOKEN, authResult.access_token);
    localStorage.setItem(SessionEnum.EXPIRES_AT, JSON.stringify(expiresAt.valueOf()));
  }

  logout(): void {
    this.http.post(`${this.BASE_URL}/logout`, null);
    localStorage.removeItem(SessionEnum.TOKEN);
    localStorage.removeItem(SessionEnum.EXPIRES_AT);
  }

  isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut(): boolean {
    return !this.isLoggedIn()
  }

  getExpiration(): moment.Moment {
    return moment(JSON.parse(localStorage.getItem(SessionEnum.EXPIRES_AT) || '{}'));
  }
}
