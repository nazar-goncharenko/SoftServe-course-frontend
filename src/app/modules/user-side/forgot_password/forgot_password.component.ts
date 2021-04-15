import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../../../services/authentification.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './forgot_password.component.html',
    styleUrls: ['./forgot_password.component.scss']
})
export class Forgot_passwordComponent implements OnInit {

    username: string;
    password: string;
    invalidLogin = false;
    constructor(private service: AuthentificationService, private  router: Router) {
    }

    ngOnInit(): void {
    }

    doLogin() {
        const resp = this.service.login(this.loginData);
        resp.subscribe(data => {
            this.router.navigate(['/']);
        },
            error => {
                this.invalidLogin = true
            });
    }
}
