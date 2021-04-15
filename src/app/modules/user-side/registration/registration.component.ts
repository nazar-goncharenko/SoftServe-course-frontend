import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../../../services/authentification.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    username: string;
    password: string;
    invalidLogin = false;
    email: string;
    constructor(private service: AuthentificationService, private  router: Router) {
    }

    ngOnInit(): void {
    }


}
