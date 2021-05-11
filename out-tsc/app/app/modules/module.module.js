import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { HeaderComponent } from './user-side/templates/header/header.component';
import { FooterComponent } from './user-side/templates/footer/footer.component';
import { NavigationComponent } from './user-side/templates/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './user-side/home/home.component';
let ModuleModule = class ModuleModule {
};
ModuleModule = __decorate([
    NgModule({
        declarations: [HomeComponent, HeaderComponent, NavigationComponent, FooterComponent],
        exports: [],
        imports: [
            CommonModule,
            RouterModule,
        ]
    })
], ModuleModule);
export { ModuleModule };
//# sourceMappingURL=module.module.js.map