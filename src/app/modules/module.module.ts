import {NgModule} from '@angular/core';
import {HeaderComponent} from './user-side/templates/header/header.component';
import {FooterComponent} from './user-side/templates/footer/footer.component';
import {NavigationComponent} from './user-side/templates/navigation/navigation.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './user-side/home/home.component';


@NgModule({
    declarations: [HomeComponent, HeaderComponent, NavigationComponent, FooterComponent],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class ModuleModule { }
