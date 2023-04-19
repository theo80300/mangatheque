import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Récupérer le jeton JWT stocké localement
    if (request.url.includes('http://localhost:8090/api/*')) {
      console.log("hello my dear")
      const token = localStorage.getItem('token');

      // Ajouter le jeton JWT à l'en-tête d'autorisation
      if (token) {
        request = request.clone({
          setHeaders: {
            Authorization: `${token}`
          }
        });
      }
    }
    console.log(request)
    console.log(localStorage.getItem('token'))
    return next.handle(request);
  }
}
