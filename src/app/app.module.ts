import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './modules/user-side/home/home.component';
import {ModulesModule} from './modules/modules.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {ModuleModule} from './modules/module.module';
import {UserService} from './services/user.service';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ModulesModule,
        FontAwesomeModule,
        HttpClientModule,
        NoopAnimationsModule,
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
