import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ModuleModule} from './modules/module.module';
import {UserService} from './services/user.service';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';


const modules = [
    BrowserModule,
    AppRoutingModule,
    ModuleModule,
    FontAwesomeModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatListModule,
    MatRadioModule,
];

@NgModule({
    declarations: [AppComponent],
    imports: modules,
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
