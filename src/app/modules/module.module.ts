import {NgModule} from '@angular/core';
import {HeaderComponent} from './user-side/templates/header/header.component';
import {FooterComponent} from './user-side/templates/footer/footer.component';
import {NavigationComponent} from './user-side/templates/navigation/navigation.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './user-side/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {AddPhotoComponent} from './admin-side/photo/add-photo.component';


@NgModule({
    declarations: [HomeComponent
        , HeaderComponent
        , NavigationComponent
        , FooterComponent
        , AddPhotoComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MatTabsModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
    ]
})
export class ModuleModule { }
