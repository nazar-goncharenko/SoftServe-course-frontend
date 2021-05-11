import {Component, OnInit} from '@angular/core';
import {User} from '../../../shared/interfaces/user';
import {UserService} from '../../../services/user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    users: User[];

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.findAll().subscribe(data => {
            this.users = data;
        });
    }
}
