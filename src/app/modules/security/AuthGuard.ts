import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(private router: Router,private  authentificationService:AuthentificationService ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (/*sessionStorage.getItem('isLoggedIn') == 'true' && */this.authentificationService.isUserLoggedIn() ) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
