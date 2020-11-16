import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebuggerComponent } from './debugger.component';
import {Config, ConfigModule} from '@spartacus/core';
import {DebugConfig, DebugConfigType} from './debug-config';



@NgModule({
  declarations: [DebuggerComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      debugConfig: DebugConfigType.CONSOLE
    } as DebugConfig)
  ],
  providers: [
    {provide: DebugConfig, useExisting: Config}
  ],
  exports: [DebuggerComponent]
})
export class DebuggerModule { }
