import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginDataModel } from '../models/login-data.model';
import { environment } from '../../../environments/environment';
import { Observable, tap } from 'rxjs';
import { AuthResultModel } from '../models/auth-result.model';
import { SessionEnum } from '../constants/session.enum';
import * as moment from 'moment';
import jwt_decode from 'jwt-decode';
import { TokenPayloadModel } from '../models/token-payload.model';
import { UserModel } from '../../shared/models/user.model';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly BASE_URL = environment.apiUrl + 'auth';

  constructor(private http: HttpClient, private permissionsService: NgxPermissionsService) {}

  login(credentials: LoginDataModel): Observable<any> {
    return this.http
      .post(`${this.BASE_URL}/login`, {
        email: credentials.email,
        password: credentials.password,
        remember_me: credentials.rememberMe,
      })
      .pipe(tap(res => this.setSession(res as AuthResultModel)));
  }

  private setSession(authResult: AuthResultModel): void {
    const expiresAt = moment().add(authResult.expires_in, 'second');
    const decodedToken = jwt_decode(authResult.access_token) as TokenPayloadModel;
    this.permissionsService.loadPermissions(decodedToken.permissions);
    localStorage.setItem(SessionEnum.TOKEN, authResult.access_token);
    localStorage.setItem(SessionEnum.EXPIRES_AT, JSON.stringify(expiresAt.valueOf()));
    localStorage.setItem(SessionEnum.FIRST_NAME, decodedToken.first_name);
    localStorage.setItem(SessionEnum.PERMISSIONS, JSON.stringify(decodedToken.permissions));
  }

  logout(): void {
    this.http.post(`${this.BASE_URL}/logout`, null);
    this.permissionsService.flushPermissions();
    localStorage.removeItem(SessionEnum.TOKEN);
    localStorage.removeItem(SessionEnum.EXPIRES_AT);
    localStorage.removeItem(SessionEnum.FIRST_NAME);
    localStorage.removeItem(SessionEnum.PERMISSIONS);
  }

  isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  getExpiration(): moment.Moment {
    return moment(JSON.parse(localStorage.getItem(SessionEnum.EXPIRES_AT) || '{}'));
  }

  getUserFirstname(): string {
    return localStorage.getItem(SessionEnum.FIRST_NAME) || '';
  }

  me(): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.BASE_URL}/me`);
  }
}
