import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {CarouselModule, OutletRefModule} from '@spartacus/storefront';
import { CustomOutletsComponent } from './custom-outlets.component';
import {Covid19Module} from './covid19/covid19.module';
import {SiteLogoModule} from './site-logo/site-logo.module';
import {PdpAvailabilityModule} from './pdp-availability/pdp-availability.module';
import {MainBannerModule} from './main-banner/main-banner.module';
import {CurrentCartItemsModule} from './current-cart-items/current-cart-items.module';
import {RecentlyBoughtModule} from './recently-bought/recently-bought.module';
import {RecentlyViewedModule} from "./recently-viewed/recently-viewed.module";
import {ProductUpsellingModule} from "./product-upselling/product-upselling.module";

@NgModule({
  declarations: [CustomOutletsComponent],
  imports: [
    CommonModule,
    OutletRefModule,
    Covid19Module,
    SiteLogoModule,
    PdpAvailabilityModule,
    MainBannerModule,
    CurrentCartItemsModule,
    ProductUpsellingModule,
    RecentlyViewedModule,
    RecentlyBoughtModule
  ],
  exports: [CustomOutletsComponent]
})
export class CustomOutletsModule { }
