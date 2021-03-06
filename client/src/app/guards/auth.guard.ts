import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AccountService} from '../services/web/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate
{
  constructor(
    private router: Router,
    private accountService: AccountService
  )
  {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    if (this.accountService.user)
    {
      return true;
    }
    // noinspection JSIgnoredPromiseFromCall
    this.router.navigate(['/Login'], { queryParams: { returnUrl: state.url }});
    return false;
  }

}
