import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './modules/user-side/home/home.component';
import {BannersManagementComponent} from "./modules/admin-side/admin-banners/pages/banners-management/banners-management.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'banners', component: BannersManagementComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
