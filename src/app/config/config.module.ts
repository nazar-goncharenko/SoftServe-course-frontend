import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfigService} from "@services/config.service";
import {HttpClientModule} from "@angular/common/http";

export function init_app(configService: ConfigService) {
  console.log("init_app")
  return () => configService.load();
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ConfigService,
    {provide: APP_INITIALIZER, useFactory: init_app, deps: [ConfigService], multi: true}
  ]
})
export class ConfigModule { }
