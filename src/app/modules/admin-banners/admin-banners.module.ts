import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannersManagementComponent } from './pages/banners-management/banners-management.component';
import { CoreModule } from 'src/app/core/core.module';
import { EditBannerComponent } from './components/edit-banner/edit-banner.component';
import { BannerItemComponent } from './components/banner-item/banner-item.component';
import { BannersListComponent } from './components/banners-list/banners-list.component';



@NgModule({
  declarations: [BannersManagementComponent, EditBannerComponent, BannerItemComponent, BannersListComponent],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class AdminBannersModule { }
