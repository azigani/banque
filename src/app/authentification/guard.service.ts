import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private  router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |Promise<boolean> {
    const estConnecte = sessionStorage.getItem('estConnecte') === 'true';
    if (!estConnecte) {
      this.router.navigate(['/connexion']);
    }
    return estConnecte;

  }
}
