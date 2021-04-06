import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { users } from "../users";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
        // First get the user id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const userIdFromRoute = Number(routeParams.get('userId'));

  // Find the user that correspond with the id provided in route.
  this.user = users.find(user => user.id === userIdFromRoute);
  }

}