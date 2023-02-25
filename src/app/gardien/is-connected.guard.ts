import { UserService } from './../services/storage/user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsConnectedGuard implements CanActivate {

  isConnected : boolean = false;
  constructor(private router :Router , private userService : UserService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.userService.isConnected()) return true;
    this.router.navigate(["/login"]);
    return false;
  }

}
