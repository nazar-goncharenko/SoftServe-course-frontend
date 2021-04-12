import { Component, OnInit } from '@angular/core';
import {User} from '../../../shared/model/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../core/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user;
  userIdFromRoute;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
    this.user = new User();
  }

  onSubmit(): void {
    this.userService.save(this.user, this.userIdFromRoute).subscribe(result => this.gotoUserList());
  }


// only for testing!
  gotoUserList(): void {
    this.router.navigate(['/users']);
  }

  ngOnInit(): void {
    // First get the user id from the current route.
    const routeParams = this.route.snapshot.paramMap;

    this.userIdFromRoute = Number(routeParams.get('user_id'));

    // Find the user that correspond with the id provided in route.
    this.user = this.userService.getUserById(this.userIdFromRoute);
  }

}
