import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './modules/user-side/home/home.component';
import {BannersManagementComponent} from "./modules/admin-side/admin-banners/pages/banners-management/banners-management.component";
import {UserProfileComponent} from './modules/user-side/user-profile/user-profile.component';
import {UserListComponent} from './modules/user-side/user-list/user-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'banners', component: BannersManagementComponent },
  { path: 'user/:user_id', component: UserProfileComponent},
  { path: 'users', component: UserListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
