import {NgModule} from '@angular/core';
import {HeaderComponent} from './user-side/templates/header/header.component';
import {FooterComponent} from './user-side/templates/footer/footer.component';
import {NavigationComponent} from './user-side/templates/navigation/navigation.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './user-side/home/home.component';
import {LoginComponent} from './user-side/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Forgot_passwordComponent} from './user-side/forgot_password/forgot_password.component';
import {RegistrationComponent} from './user-side/registration/registration.component';


@NgModule({
    declarations: [HomeComponent, LoginComponent,
        Forgot_passwordComponent, HeaderComponent,
        NavigationComponent, FooterComponent,
        RegistrationComponent],
    exports: [],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class ModuleModule {
}
