import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { finalize, Observable, tap } from 'rxjs';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    let ok: string;

    return next.handle(req).pipe(
      // DEPRECATED: use object instead of separated callbacks
      tap(
        (event: HttpEvent<any>) => ok = event instanceof HttpResponse ? 'succeeded' : '',
        (error: HttpErrorResponse) => ok = "failed"
      ),

      finalize(() => {
        const elapsedTime = Date.now() - started;
        const message = `${req.method} "${req.urlWithParams}" ${ok} in ${elapsedTime} ms.`;
        console.log(message);
      })
    );
  }
}
