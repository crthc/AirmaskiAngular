import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  
  canActivate(): boolean {
    if (this.auth.userToken) {
      this.router.navigateByUrl('/');
      return false;
    } else {
      return true
    }
  }
  
}
