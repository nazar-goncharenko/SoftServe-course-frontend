import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannersManagementComponent } from './pages/banners-management/banners-management.component';
import { EditBannerComponent } from './components/edit-banner/edit-banner.component';
import { BannerItemComponent } from './components/banner-item/banner-item.component';
import { BannersListComponent } from './components/banners-list/banners-list.component';
import { PredefinedCategoriesSettingsComponent } from './components/predefined-categories-settings/predefined-categories-settings.component';
import { NewBannerComponent } from './components/new-banner/new-banner.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [BannersManagementComponent, EditBannerComponent, BannerItemComponent, BannersListComponent, PredefinedCategoriesSettingsComponent, NewBannerComponent],
  exports: [
      BannerItemComponent,
      BannersListComponent,
      EditBannerComponent,
      BannersManagementComponent,
      NewBannerComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class AdminBannersModule { }
