import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomCartComponent} from './custom-cart.component';
import {CmsConfig, ConfigModule, I18nModule} from '@spartacus/core';
import {
  CartDetailsModule, ItemCounterModule,
  MediaModule,
  PageComponentModule,
  PromotionsModule
} from '@spartacus/storefront';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CustomCartComponent],
  exports: [
    CustomCartComponent
  ],
  imports: [
    CommonModule,
    PageComponentModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CartComponent: {
          component: CustomCartComponent
        }
      }
    } as CmsConfig),
    I18nModule,
    CartDetailsModule,
    MediaModule,
    PromotionsModule,
    ItemCounterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomCartModule {
}
