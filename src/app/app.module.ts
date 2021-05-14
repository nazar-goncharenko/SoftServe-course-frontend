import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminBannersModule} from "@modules/admin-side/admin-banners/admin-banners.module";
import {FormsModule} from "@angular/forms";
import {ModuleModule} from '@modules/module.module';
import {AuthentificationService} from '@services/authentification.service';
import {UserService} from '@services/user.service';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';

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
        AdminBannersModule,
        HttpClientModule,
        NoopAnimationsModule,
        MatListModule,
        FormsModule,
        MatSlideToggleModule
    ],
    providers: [
        UserService,
        AuthentificationService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
