import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, RouterStateSnapshot, Router, Route, UrlSegment, UrlTree, CanActivate, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  signedin!:boolean;
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('userToken') != null) {
      this.signedin = true;
      return true;
    }
    this.router.navigate(['signin']);
    this.signedin = false;
    return false;
  }






}
