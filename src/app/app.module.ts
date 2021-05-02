import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {ModuleModule} from './modules/module.module';
import {UserService} from './services/user.service';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        ModuleModule,
        FontAwesomeModule,
        HttpClientModule,
        NoopAnimationsModule,
        BrowserAnimationsModule,
        DragDropModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatSelectModule,
        NgbModule,
        IvyCarouselModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
