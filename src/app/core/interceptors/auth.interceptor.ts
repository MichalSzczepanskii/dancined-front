import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionEnum } from '../constants/session.enum';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem(SessionEnum.TOKEN);
    if (!token) return next.handle(request);
    return next.handle(
      request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
      })
    );
  }
}
