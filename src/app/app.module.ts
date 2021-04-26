import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './modules/user-side/home/home.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {ModuleModule} from './modules/module.module';
import {UserService} from './services/user.service';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ModuleModule,
        FontAwesomeModule,
        HttpClientModule,
        NoopAnimationsModule,
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
