import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ModuleModule } from './modules/module.module';
import { AuthentificationService } from './services/authentification.service';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent
            //Forgot_passwordComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            ModuleModule,
            FontAwesomeModule,
            HttpClientModule
        ],
        providers: [AuthentificationService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
