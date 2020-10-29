import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentCartItemsComponent } from './current-cart-items.component';
import { OutletRefModule } from '@spartacus/storefront';



@NgModule({
  declarations: [CurrentCartItemsComponent],
  exports: [
    CurrentCartItemsComponent
  ],
  imports: [
    CommonModule,
    OutletRefModule
  ]
})
export class CurrentCartItemsModule { }
