import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './modules/user-side/home/home.component';
import {LoginComponent} from './modules/user-side/login/login.component';
import {Forgot_passwordComponent} from './modules/user-side/forgot_password/forgot_password.component';
import {RegistrationComponent} from './modules/user-side/registration/registration.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'forgot_password', component: Forgot_passwordComponent},
    {path: 'registration', component: RegistrationComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
