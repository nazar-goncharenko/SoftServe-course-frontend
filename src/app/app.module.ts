import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {ModuleModule} from './modules/module.module';
import {AuthentificationService} from './services/authentification.service';
import {LoginComponent} from './modules/user-side/login/login.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserService} from './services/user.service';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent
        //  Forgot_passwordComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ModuleModule,
        FontAwesomeModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
    ],
    providers: [UserService, AuthentificationService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
