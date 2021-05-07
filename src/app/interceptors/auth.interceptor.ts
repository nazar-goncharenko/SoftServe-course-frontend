import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const basicHeader = JSON.parse(JSON.stringify(sessionStorage.getItem('Authorization')));

        if (basicHeader) {
            req = req.clone({
                setHeaders: {
                    Authorization: basicHeader,
                }
            });
        }
        return next.handle(req);
    }
}
