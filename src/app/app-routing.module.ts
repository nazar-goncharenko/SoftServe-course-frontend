import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './modules/user-side/home/home.component';
import {LoginComponent} from './modules/user-side/login/login.component';
import {Forgot_passwordComponent} from './modules/user-side/forgot_password/forgot_password.component';
import {RegistrationComponent} from './modules/user-side/registration/registration.component';
import {UserProfileComponent} from './modules/user-side/user-profile/user-profile.component';
import {UserListComponent} from './modules/user-side/user-list/user-list.component';
import {ResetComponent} from './modules/user-side/reset_password/reset.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'forgot_password', component: Forgot_passwordComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'user/:user_id', component: UserProfileComponent},
    {path: 'users', component: UserListComponent},
    {path: 'reset_password',component: ResetComponent}
    ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
