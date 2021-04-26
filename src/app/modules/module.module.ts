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
import { AddArticleComponent } from './admin-side/add-article/add-article.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
    declarations: [HomeComponent
        , HeaderComponent
        , NavigationComponent
        , FooterComponent
        , UserProfileComponent
        , UserListComponent,
        AddArticleComponent
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
        FontAwesomeModule,
    ]
})
export class ModuleModule { }
