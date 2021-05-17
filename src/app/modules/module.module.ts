import {NgModule} from '@angular/core';
import {HeaderComponent} from './user-side/templates/header/header.component';
import {FooterComponent} from './user-side/templates/footer/footer.component';
import {NavigationComponent} from './user-side/templates/navigation/navigation.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './user-side/login/login.component';
import {Forgot_passwordComponent} from './user-side/forgot_password/forgot_password.component';
import {RegistrationComponent} from './user-side/registration/registration.component';
import { HomeComponent } from './user-side/home/home.component';
import {UserProfileComponent} from './user-side/user-profile/user-profile.component';
import {UserListComponent} from './user-side/user-list/user-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {ResetComponent} from './user-side/reset_password/reset.component';
import {AddPhotoComponent} from './admin-side/add-photo/add-photo.component';
import {AddArticleComponent} from './admin-side/add-article/add-article.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
    declarations: [HomeComponent
        , HeaderComponent
        , NavigationComponent
        , FooterComponent
        , AddPhotoComponent
        , LoginComponent
        , Forgot_passwordComponent
        , RegistrationComponent
        , UserProfileComponent
        , ResetComponent
        , UserListComponent
        , AddArticleComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MatTabsModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatListModule,
        MatRadioModule,
        MatSlideToggleModule,
    ]
})
export class ModuleModule {
}
