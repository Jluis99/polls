import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    const url = 'http://[::1]:3000/auth/login';
    return this.http.post<any>(url, data);
  }
}
