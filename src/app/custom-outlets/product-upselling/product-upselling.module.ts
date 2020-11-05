import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CarouselModule, MediaModule, OutletRefModule} from "@spartacus/storefront";
import {RouterModule} from "@angular/router";
import {RoutingModule, UrlModule} from "@spartacus/core";
import {ProductUpsellingComponent} from "./product-upselling.component";

@NgModule({
  declarations: [ProductUpsellingComponent],
  imports: [
    CommonModule,
    OutletRefModule,
    CarouselModule,
    MediaModule,
    RouterModule,
    RoutingModule,
    UrlModule
  ],
  exports: [
    ProductUpsellingComponent
  ]
})
export class ProductUpsellingModule {
}
