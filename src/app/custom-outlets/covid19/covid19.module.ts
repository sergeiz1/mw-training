import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Covid19Component } from './covid19.component';
import {OutletRefModule} from '@spartacus/storefront';



@NgModule({
  declarations: [Covid19Component],
  exports: [
    Covid19Component
  ],
  imports: [
    CommonModule,
    OutletRefModule
  ]
})
export class Covid19Module { }
