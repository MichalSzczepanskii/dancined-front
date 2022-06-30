import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, filter, Observable, tap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { MessageService } from 'primeng/api';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private messageService: MessageService, private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        // if (err.status === 401 && !err.url?.includes('login')) {
        //   this.authService.logout();
        //   location.reload();
        // }
        if (err.status === 0 || String(err.status).startsWith('5'))
          this.messageService.add({ severity: 'error', summary: 'Błąd', detail: 'Błąd serwera' });
        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
