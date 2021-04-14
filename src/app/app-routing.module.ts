import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './modules/user-side/home/home.component';
import {AddPhotoComponent} from './modules/admin-side/photo/add-photo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', component: AddPhotoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
