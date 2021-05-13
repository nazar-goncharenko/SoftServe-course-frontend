import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {User} from '../user';
import {ResponseData} from '../response-data';
import {RegistrationClientService} from '../../../services/Registration.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ResetService} from '../../../services/reset.service';
import {Reset_entity} from '../reset_entity';

@Component({
    selector: 'app-reset-form',
    templateUrl: './reset.component.html',
    styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
    visible = false;
    buttonRegister = true;
    submitted = false;
    token: string;
    private resetData: Reset_entity;
    resetForm: FormGroup;


    constructor(
        public resetService: ResetService, public router: Router,
        private activatedRoute: ActivatedRoute
    ) {

    }


    enableForm(enable: boolean) {
        if (enable) {

            this.resetForm.get('newPassword').enable();
            this.resetForm.get('confirmPassword').enable();

            this.buttonRegister = true;
        } else {
            this.resetForm.get('newPassword').disable();
            this.resetForm.get('confirmPassword').disable();
            this.buttonRegister = false;
        }
    }

    reset() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.token = params['token'];
            console.log(this.token); // Print the parameter to the console.
        });
        this.submitted = true;
        if (this.resetForm.invalid) {
            return;
        } else {
            this.resetData = new Reset_entity();
            this.resetData.setToken(this.token);
            this.resetData.setNewPassword(this.resetForm.get('newPassword').value);
            this.resetData.setConfirmPassword(this.resetForm.get('confirmPassword').value);
            console.log(this.resetData.getNewPassword());
            console.log(this.resetData.getConfirmPassword());
            this.resetService.reset(this.resetData).subscribe((data: ResponseData) => {
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

            this.router.navigateByUrl('/');
        }
    }

    ngOnInit() {
        this.resetForm = new FormGroup({
         //   token: new FormControl('', [Validators.required]),
            newPassword: new FormControl('', [Validators.required]),
            confirmPassword: new FormControl('', [Validators.required])
        });
    }

    setSubmitted(submitted: boolean) {
        this.submitted = submitted;
    }

}
