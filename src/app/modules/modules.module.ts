import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './user-side/templates/header/header.component';
import {FooterComponent} from './user-side/templates/footer/footer.component';
import {NavigationComponent} from './user-side/templates/navigation/navigation.component';
import {RouterModule} from '@angular/router';
import {UserSideModule} from './user-side/user-side.module';


@NgModule({
    declarations: [],
    exports: [
    ],
    imports: [
        UserSideModule,
        CommonModule,
        RouterModule,
    ]
})
export class ModulesModule{ }
