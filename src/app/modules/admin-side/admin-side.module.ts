import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import {AddPhotoComponent} from './photo/add-photo.component';


@NgModule({
  declarations: [AddPhotoComponent],
  exports: [
    AddPhotoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdminSideModule { }
