import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { switchMapTo, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TurtleInterceptorService implements HttpInterceptor {
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return timer(250, 60000).pipe(take(1), switchMapTo(next.handle(req)));
  }
}
