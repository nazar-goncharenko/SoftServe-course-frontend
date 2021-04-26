import {NgModule} from '@angular/core';
import {HeaderComponent} from './user-side/templates/header/header.component';
import {FooterComponent} from './user-side/templates/footer/footer.component';
import {NavigationComponent} from './user-side/templates/navigation/navigation.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './user-side/home/home.component';
import {UserProfileComponent} from './user-side/user-profile/user-profile.component';
import {UserListComponent} from './user-side/user-list/user-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [HomeComponent
        , HeaderComponent
        , NavigationComponent
        , FooterComponent
        , UserProfileComponent
        , UserListComponent
    ],
    exports: [
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
