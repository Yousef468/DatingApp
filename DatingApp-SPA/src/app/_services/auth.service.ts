import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth';
  jwtService = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + '/login', model)
    .pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtService.decodeToken(user.token);
          console.log(this.decodedToken);
        }
      })
      );
  }

  register(user: User) {
    return this.http.post(this.baseUrl + '/register', user);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtService.isTokenExpired(token);
  }
}
