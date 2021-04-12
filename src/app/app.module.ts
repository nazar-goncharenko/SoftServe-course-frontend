import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // npm install @fortawesome/angular-fontawesome@0.8.x
import {HttpClientModule} from '@angular/common/http';
import { UserListComponent } from './modules/user/user-list/user-list.component';
import { UserProfileComponent } from './modules/user/user-profile/user-profile.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './core/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserProfileComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        FontAwesomeModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
