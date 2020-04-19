import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from './services/storage/local-storage.service'; 
import { Router } from '@angular/router';
import { LoginService } from './services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {

  constructor(private local: LocalStorageService, private router: Router, private login:LoginService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.login.tokenIsValid()){
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
  }
  
}
