import {NgModule} from '@angular/core';
import {HeaderComponent} from './templates/header/header.component';
import {FooterComponent} from './templates/footer/footer.component';
import {NavigationComponent} from './templates/navigation/navigation.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [HeaderComponent, FooterComponent, NavigationComponent],
    exports: [
        HeaderComponent,
        FooterComponent,
        NavigationComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class UserSideModule {
}
