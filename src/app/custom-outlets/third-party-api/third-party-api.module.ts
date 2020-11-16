import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdPartyApiComponent } from './third-party-api.component';
import {OutletRefModule} from '@spartacus/storefront';



@NgModule({
  declarations: [ThirdPartyApiComponent],
  exports: [
    ThirdPartyApiComponent
  ],
  imports: [
    CommonModule,
    OutletRefModule
  ]
})
export class ThirdPartyApiModule { }
