import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Config, ConfigModule} from "@spartacus/core";
import {SessionConfig} from "./session.config";

@NgModule({
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      session: {
        autoLogout: {
          enabled: false,
          timeout: 5000
        }
      }
    } as SessionConfig)
  ],
  providers: [
    {
      provide: SessionConfig, useExisting: Config
    }
  ]
})

export class SessionModule {
}
