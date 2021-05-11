import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {User} from '../user';
import {ResponseData} from '../response-data';
import {RegistrationClientService} from '@services/Registration.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration.component.html',
    styleUrls: [ './registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    visible = false;
    buttonRegister = true;
    submitted = false;

    private registrationData: User;
    registrationForm: FormGroup;


    constructor(
        public registrationClient: RegistrationClientService, public router: Router
    ) {
    }


    enableForm(enable: boolean) {
        if (enable) {

            this.registrationForm.get('username').enable();
            this.registrationForm.get('password').enable();
            this.registrationForm.get('email').enable();
            this.buttonRegister = true;
        } else {
            this.registrationForm.get('username').disable();
            this.registrationForm.get('password').disable();
            this.registrationForm.get('email').disable();
            this.buttonRegister = false;
        }
    }

    register() {
        this.submitted = true;
        if (this.registrationForm.invalid) {
            return;
        } else {
            this.registrationData = new User();
            this.registrationData.setUsername(this.registrationForm.get('username').value);
            this.registrationData.setEmail(this.registrationForm.get('email').value);
            this.registrationData.setPassword(this.registrationForm.get('password').value);
            this.registrationClient.register(this.registrationData).subscribe((data: ResponseData) => {
                console.log('RESPONSE DATA ' + JSON.stringify(data));
            if (data.responseCode === '200') {
                    window.alert(data.responseMsg);
                    this.visible = true;
                    this.enableForm(false);
                } else {
                    this.enableForm(true);
                }
            }, error => {
                console.log('An Error Occured ' + error);
            });
            this.router.navigateByUrl('/');
        }
    }

    ngOnInit() {
        this.registrationForm = new FormGroup({
            username: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required])
        });
    }

    setSubmitted(submitted: boolean) {
        this.submitted = submitted;
    }

}
