import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponentsComponent } from './custom-components.component';
import {CustomCartModule} from './cart-component/custom-cart.module';



@NgModule({
  declarations: [CustomComponentsComponent],
  imports: [
    CommonModule,
    CustomCartModule
  ]
})
export class CustomComponentsModule { }
