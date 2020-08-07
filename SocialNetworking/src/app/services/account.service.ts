import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginRequest, LoginResponse } from '../models/login';
import { Response } from '../models/api-response';
import { RegisterRequest, RegisterResponse } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url = `${environment.urlApi}/Account`;

  constructor(private http: HttpClient) { }


  async login(login: LoginRequest) {
    const params = { Email: login.email, Password: login.password };
    const result = await this.http.get<Response<LoginResponse>>(`${this.url}/Login`, { params }).toPromise();
    localStorage.setItem('access_token', btoa(result.result.access_token));
    result.result.expires_in = new Date(result.result.expires_in);
    return result;
  }

  async register(register: RegisterRequest) {
    return this.http.post<Response<RegisterResponse>>(`${this.url}/Register`, register).toPromise();
  }

}
