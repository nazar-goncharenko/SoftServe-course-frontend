import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class RoleGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (localStorage.getItem('role') === 'ROLE_ADMIN') {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}
