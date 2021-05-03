import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './modules/user-side/home/home.component';
import {UserProfileComponent} from './modules/user-side/user-profile/user-profile.component';
import {UserListComponent} from './modules/user-side/user-list/user-list.component';
import {AdminVideoComponent} from './modules/admin-side/video/video/video.component';
import {VideoEditComponent} from './modules/admin-side/video/video-edit/video-edit.component';
import {AdminHomeComponent} from './modules/admin-side/home/home.component';
import {VideosComponent} from './modules/user-side/video/videos/videos.component';
import {VideoComponent} from './modules/user-side/video/video/video.component';


const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'user/:user_id', component: UserProfileComponent},
    {path: 'users', component: UserListComponent},
    {path: 'videos', component: VideosComponent},
    {path: 'sportCategory/:id', component: HomeComponent},
    {path: 'videos/:id', component: VideoComponent},
    {
        path: 'admin', component: AdminHomeComponent, children: [
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
