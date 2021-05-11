import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '@services/user.service';
import {FormControl, FormGroup} from '@angular/forms';

declare function checkNames(): any;

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    user;
    userIdFromRoute: number;
    uploadFile: File = null;
    updateUserForm: FormGroup;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService) {
    }

    private createForm(): void {
        this.updateUserForm = new FormGroup({
            id: new FormControl(this.userIdFromRoute),
            username: new FormControl(null),
            email: new FormControl(null),
            password: new FormControl(null),
            new_pass: new FormControl(null),
            new_pass_2: new FormControl(null)
        });
    }

    handleFileInput(files: FileList): void {
        this.uploadFile = files.item(0);
    }


    updateUser(): void {
        this.userService.updateAll(this.userIdFromRoute, this.uploadFile, this.updateUserForm.value);
        this.router.navigate([`user/${this.userIdFromRoute}`])
            .then(() => {
                window.location.reload();
            });
    }


    deleteUser(): void {
        this.userService.deleteUser(this.userIdFromRoute);
        this.router.navigate(['']);
    }


    ngOnInit(): void {
        const routeParams = this.route.snapshot.paramMap;
        this.userIdFromRoute = Number(routeParams.get('user_id'));

        this.userService.getUserById(this.userIdFromRoute)
            .subscribe((data: string[]) => {
                console.log(data);
                this.user = data;
            });

        this.createForm();
        checkNames();
    }
}
