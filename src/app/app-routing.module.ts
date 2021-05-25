import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '@modules/user-side/home/home.component';
import {LoginComponent} from '@modules/user-side/login/login.component';
import {Forgot_passwordComponent} from '@modules/user-side/forgot_password/forgot_password.component';
import {RegistrationComponent} from '@modules/user-side/registration/registration.component';
import {UserProfileComponent} from '@modules/user-side/user-profile/user-profile.component';
import {UserListComponent} from '@modules/user-side/user-list/user-list.component';
import {ResetComponent} from '@modules/user-side/reset_password/reset.component';
import {RoleGuard} from '@modules/security/RoleGuard';
import {AddArticleComponent} from '@modules/admin-side/add-article/add-article.component';
import {AddPhotoComponent} from '@modules/admin-side/add-photo/add-photo.component';
import {VideoComponent} from '@modules/user-side/video/video/video.component';
import {VideosComponent} from '@modules/user-side/video/videos/videos.component';
import {AdminHomeComponent} from '@modules/admin-side/home/home.component';
import {VideoEditComponent} from '@modules/admin-side/video/video-edit/video-edit.component';
import {AdminVideoComponent} from '@modules/admin-side/video/video/video.component';
import {AuthGuard} from '@modules/security/AuthGuard';



const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'forgot_password', component: Forgot_passwordComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'user/:user_id', component: UserProfileComponent },
    { path: 'users', component: UserListComponent, canActivate: [RoleGuard] },
    { path: 'reset_password', component: ResetComponent },
    { path: 'videos', component: VideosComponent },
    { path: 'videos/:id', component: VideoComponent },
    {
        path: 'admin', canActivate: [RoleGuard, AuthGuard], children: [
            { path: '', component: AdminHomeComponent },
            { path: 'videos', component: AdminVideoComponent },
            { path: 'videos/:id', component: VideoEditComponent },
            { path: 'add-article', component: AddArticleComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
