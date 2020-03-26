import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthenticationState } from './../store/modals/authentication.modal';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private LOGIN_URL = 'http://localhost:3000/authentication/';

  constructor(private http: HttpClient) { }

  // return this.http.get<AuthenticationState>(`${this.LOGIN_URL}/${userName}`).pipe();

  // authenticate(userName: string) {
  authenticate(userName: string): Observable<AuthenticationState> {
    return this.http.get<AuthenticationState>(`${this.LOGIN_URL}${userName}`).pipe();
  }

  // getShoppingItems() {
  //   return this.http.get<Array<ShoppingItem>>(this.SHOPPING_URL).pipe(delay(500));
  // }
}
