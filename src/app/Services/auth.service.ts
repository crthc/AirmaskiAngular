import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../Models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = "AIzaSyBPSycQrbqbL-jeWFsWiE3bH0zZKaJNFKE";

  logged:boolean = false;
  userToken: string;

  

  // Create new user

  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //Log in

  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) {
    this.readToken();
  }

  logout() {
    localStorage.removeItem('token');
    this.logged = !this.logged;
  }

  login(user: UserModel) {
    const authData = {
      ...user,
      returnSecureToken: true,
    };
    return this.http
      .post(`${this.url}signInWithPassword?key=${this.apikey}`, authData)
      .pipe(
        map((resp) => {
          this.saveToken(resp['idToken']);
          this.logged = !this.logged;
          return resp;
        })
      );
  }

  newUser(user: UserModel) {
    const authData = {
      ...user,
      returnSecureToken: true,
    };

    return this.http
      .post(`${this.url}signUp?key=${this.apikey}`, authData)
      .pipe(
        map((resp) => {
          this.saveToken(resp['idToken']);
          this.logged = true;
          return resp;
        })
      );
  }

  private saveToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  readToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  authenticated(): boolean {
    return this.userToken.length > 2;
  }
}
