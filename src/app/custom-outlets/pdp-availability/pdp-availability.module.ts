import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdpAvailabilityComponent } from './pdp-availability.component';
import {OutletRefModule} from '@spartacus/storefront';


@NgModule({
  declarations: [PdpAvailabilityComponent],
  exports: [
    PdpAvailabilityComponent
  ],
  imports: [
    CommonModule,
    OutletRefModule
  ]
})
export class PdpAvailabilityModule { }
