import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs/Observable'

@Injectable()
export class TransityInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = req.clone({
        headers: req.headers.set('Authorization','Bearer 44ead9d6-97a6-474d-9610-84bef64a35a7')
    });

    return next.handle(authReq);
  }
}