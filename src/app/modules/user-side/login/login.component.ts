import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../../../services/authentification.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../user';
import {ResponseData} from '../response-data';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    private submitted = false;
    private loginData: User;

    constructor(
        public loginClient: AuthentificationService,
        public router: Router
    ) {
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            userName: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required),
        });
    }

    login() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        } else {
            this.loginData = new User();
            this.loginData.setEmail(this.loginForm.get('userName').value);
            this.loginData.setPassword(this.loginForm.get('password').value);

            this.loginClient.login(this.loginData).subscribe((data: ResponseData) => {
                console.log('RESPONSE DATA ' + JSON.stringify(data));
                console.log(data.responseCode);
              //  if (data.responseCode == '200') {
                    sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('email', this.loginData.getEmail());
                sessionStorage.setItem('role', JSON.stringify(data));

             //   }
                this.router.navigateByUrl('/');
             //   window.alert(data.responseMsg);
            }), error => {
                console.log('An Error Occured ' + error);
            };
        }
    }


    clearPass() {
        this.loginForm.get('password').setValue('');
    }

}

