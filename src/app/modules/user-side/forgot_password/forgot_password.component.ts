import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../../../services/authentification.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Reset_entity} from '../reset_entity';
import {ResponseData} from '../response-data';
import {ResetService} from '../../../services/reset.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SendEmailService} from '../../../services/SendEmail.service';
import {User} from '../user';

@Component({
    selector: 'app-forgot-form',
    templateUrl: './forgot_password.component.html',
    styleUrls: ['./forgot_password.component.scss']
})
export class Forgot_passwordComponent implements OnInit {
    visible = false;
    submitted = false;
    forgotForm: FormGroup;
    buttonForgot = true;
    private user: User;

    constructor(public sendEmailService: SendEmailService, public router: Router,
                private activatedRoute: ActivatedRoute) {
    }


    enableForm(enable: boolean) {
        if (enable) {
            this.forgotForm.get('email').enable();

            this.buttonForgot = true;
        } else {
            this.forgotForm.get('email').disable();
            this.buttonForgot = false;
        }
    }

    sendMail() {
        document.getElementById("text").innerHTML = "Email sent successfully";
        this.submitted = true;
        if (this.forgotForm.invalid) {
            return;
        } else {
            this.user = new User();
            this.user.setEmail(this.forgotForm.get('email').value);
            console.log(this.user.getEmail());
            this.sendEmailService.send(this.user).subscribe((data: ResponseData) => {
                console.log('RESPONSE DATA ' + JSON.stringify(data));
                if (data.responseCode == '200') {
                    window.alert(data.responseMsg);
                    this.visible = true;
                    this.enableForm(false);
                } else {
                    this.enableForm(true);
                }
            }), error => {
                console.log('An Error Occured ' + error);
            };

      //      this.router.navigateByUrl('/');
        }
    }

    ngOnInit() {
        this.forgotForm = new FormGroup({
            //   token: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
        });
    }

    setSubmitted(submitted: boolean) {
        this.submitted = submitted;
    }
}
