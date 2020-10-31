import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentlyBoughtComponent } from './recently-bought.component';
import {OutletRefModule} from '@spartacus/storefront';

@NgModule({
  declarations: [RecentlyBoughtComponent],
  exports: [
    RecentlyBoughtComponent
  ],
  imports: [
    CommonModule,
    OutletRefModule
  ]
})
export class RecentlyBoughtModule { }
