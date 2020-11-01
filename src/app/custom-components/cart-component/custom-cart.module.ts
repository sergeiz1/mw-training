import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomCartComponent} from './custom-cart.component';
import {CmsConfig, ConfigModule, I18nModule} from '@spartacus/core';
import {
  CartDetailsModule,
  MediaModule,
  PageComponentModule
} from '@spartacus/storefront';


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
    MediaModule
  ]
})
export class CustomCartModule {
}
