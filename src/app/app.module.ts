import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { HomeComponent } from './home/pages/home/home.component';

@NgModule({
imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'profile/:userId', component: UserProfileComponent },
    ])
  ],
  declarations: [
    AppComponent,
    UserProfileComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
