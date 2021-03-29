import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class HomeModule { }
