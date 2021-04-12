import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './modules/user-side/home/home.component';
import {ModulesModule} from './modules/modules.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {UserSideModule} from './modules/user-side/user-side.module';

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
        UserSideModule
    ],
  providers: [],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }
