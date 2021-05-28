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
import {VideoComponent} from '@modules/user-side/video/video/video.component';
import {VideosComponent} from '@modules/user-side/video/videos/videos.component';
import {AdminHomeComponent} from '@modules/admin-side/home/home.component';
import {VideoEditComponent} from '@modules/admin-side/video/video-edit/video-edit.component';
import {AdminVideoComponent} from '@modules/admin-side/video/video/video.component';
import {AddArticleComponent} from '@modules/admin-side/add-article/add-article.component';
import {SurveyComponent} from '@modules/admin-side/survey/survey.component';



const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},

    {path: 'registration', component: RegistrationComponent},
    {path: 'login', component: LoginComponent},

    {path: 'forgot_password', component: Forgot_passwordComponent},
    {path: 'reset_password', component: ResetComponent},

    {path: 'users', component: UserListComponent, canActivate: [RoleGuard]},
    {path: 'user/:user_id', component: UserProfileComponent},


    {path: 'adm/surveys', component: SurveyComponent},

    {
        path: 'admin/add-article',
        component: AddArticleComponent,
        data: {
            expectedRole: 'admin'
        }
    },
    {path: 'videos', component: VideosComponent},
    {path: 'videos/:id', component: VideoComponent},
    {
        path: 'admin', component: AdminHomeComponent, canActivate: [RoleGuard], children: [
            {path: 'videos', component: AdminVideoComponent},
            {path: 'videos/:id', component: VideoEditComponent}


        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
