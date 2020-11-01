import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponentsComponent } from './custom-components.component';
import {CustomCartModule} from './cart-component/custom-cart.module';
import {CustomPdpModule} from './pdp-components/custom-pdp.module';


@NgModule({
  declarations: [CustomComponentsComponent],
  imports: [
    CommonModule,
    CustomCartModule,
    CustomPdpModule
  ]
})
export class CustomComponentsModule { }
