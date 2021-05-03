import {NgModule} from '@angular/core';
import {HeaderComponent} from './user-side/templates/header/header.component';
import {FooterComponent} from './user-side/templates/footer/footer.component';
import {NavigationComponent} from './user-side/templates/navigation/navigation.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './user-side/home/home.component';
import {UserProfileComponent} from './user-side/user-profile/user-profile.component';
import {UserListComponent} from './user-side/user-list/user-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {AdminNavigationComponent} from './admin-side/navigation/navbar/admin-navigation.component';
import {AdminVideoComponent} from './admin-side/video/video/video.component';
import {VideoEditComponent} from './admin-side/video/video-edit/video-edit.component';
import {VideoFormComponent} from './admin-side/video/video-form/video-form.component';
import {VideoPipe} from '../pipes/video.pipe';
import {SafePipe} from '../pipes/safe.pipe';
import {AdminHomeComponent} from './admin-side/home/home.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {VideosComponent} from './user-side/video/videos/videos.component';
import {VideoComponent} from './user-side/video/video/video.component';
import {MatIconModule} from '@angular/material/icon';
import { VideoFormConfirmComponent } from './admin-side/video/video-form-confirm/video-form-confirm.component';
import { FlashMessageComponent } from './admin-side/flash-message/flash-message.component';


@NgModule({
    declarations: [HomeComponent
        , HeaderComponent
        , NavigationComponent
        , FooterComponent
        , UserProfileComponent
        , UserListComponent
        , AdminNavigationComponent
        , AdminVideoComponent
        , VideoEditComponent
        , VideoFormComponent
        , VideoPipe
        , SafePipe
        , AdminHomeComponent
        , VideosComponent
        , VideoComponent
        , VideoFormConfirmComponent, FlashMessageComponent
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
        MatSlideToggleModule,
        MatSelectModule,
        MatCardModule,
        MatDialogModule,
        IvyCarouselModule,
        MatIconModule
    ]
})
export class ModuleModule {
}
