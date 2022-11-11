import { Observable } from "rxjs";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedReq = req.clone({
            headers: req.headers.append('Auth', 'xyz')
        });

        return next.handle(modifiedReq);
    }
}