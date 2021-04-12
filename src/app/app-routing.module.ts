import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './modules/user/user-list/user-list.component';
import {UserProfileComponent} from './modules/user/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'user/:user_id', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
