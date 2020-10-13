import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OutletRefModule } from '@spartacus/storefront';
import { MyOutletsComponent } from './my-outlets.component';
import { PromoComponentComponent } from './promo-component/promo-component.component';



@NgModule({
  declarations: [MyOutletsComponent, PromoComponentComponent],
  imports: [
    CommonModule,
    OutletRefModule
  ],
  exports: [MyOutletsComponent]
})
export class MyOutletsModule { }
