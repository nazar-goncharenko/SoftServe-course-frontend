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
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import {ResetComponent} from './user-side/reset_password/reset.component';
import {AddPhotoComponent} from './admin-side/add-photo/add-photo.component';
import {AddArticleComponent} from './admin-side/add-article/add-article.component';
import {AdminVideoComponent} from './admin-side/video/video/video.component';
import {VideoComponent} from './user-side/video/video/video.component';
import {AdminHomeComponent} from './admin-side/home/home.component';
import {VideoEditComponent} from './admin-side/video/video-edit/video-edit.component';
import {VideosComponent} from './user-side/video/videos/videos.component';
import {VideoFormComponent} from './admin-side/video/video-form/video-form.component';
import {VideoFormConfirmComponent} from './admin-side/video/video-form-confirm/video-form-confirm.component';
import {AdminNavigationComponent} from './admin-side/navigation/navbar/admin-navigation.component';
import {FlashMessageComponent} from './admin-side/flash-message/flash-message.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatOptionModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {VideoPipe} from '../pipes/video.pipe';
import {SafePipe} from '../pipes/safe.pipe';
import {MatSelectModule} from '@angular/material/select';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {AddArticleComponent} from './admin-side/add-article/add-article.component';
import { SurveyComponent } from './admin-side/survey/survey.component';
import {MatTableModule} from '@angular/material/table';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
    declarations: [HomeComponent,
        HeaderComponent,
        NavigationComponent,
        FooterComponent,
        AddPhotoComponent,
        LoginComponent,
        Forgot_passwordComponent,
        RegistrationComponent,
        UserProfileComponent,
        ResetComponent,
        UserListComponent,
        AddArticleComponent,
        AdminVideoComponent,
        VideoComponent,
        AdminHomeComponent,
        VideoEditComponent,
        VideosComponent,
        VideoFormComponent,
        VideoFormConfirmComponent,
        AdminNavigationComponent,
        FlashMessageComponent, VideoPipe, SafePipe,

        AddArticleComponent,
        SurveyComponent

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
        MatDialogModule,
        MatOptionModule,
        MatCardModule,
        MatSelectModule,
        MatIconModule,
        IvyCarouselModule,
        MatSlideToggleModule,
        MatAutocompleteModule,
        MatTableModule,
        NgbModule,
        FontAwesomeModule
    ]
})
export class ModuleModule {
}
