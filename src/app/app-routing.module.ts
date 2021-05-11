import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from '@modules/user-side/home/home.component';
import {UserProfileComponent} from '@modules/user-side/user-profile/user-profile.component';
import {UserListComponent} from '@modules/user-side/user-list/user-list.component';
import {AddArticleComponent} from '@modules/admin-side/add-article/add-article.component';


const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'user/:user_id', component: UserProfileComponent },
    { path: 'users', component: UserListComponent },
    { path: 'admin/add-article',
      component: AddArticleComponent,
      data: {
        expectedRole: 'admin'
      }
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
