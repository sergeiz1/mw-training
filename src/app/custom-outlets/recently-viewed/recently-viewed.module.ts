import {APP_INITIALIZER, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecentlyViewedComponent} from './recently-viewed.component';
import {CarouselModule, MediaModule, OutletRefModule} from '@spartacus/storefront';
import {RouterModule} from '@angular/router';
import {RoutingModule, UrlModule} from '@spartacus/core';
import {RecentlyViewedService} from '../../services/recently-viewed.service';


@NgModule({
  declarations: [RecentlyViewedComponent],
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
    RecentlyViewedComponent
  ],
  providers: [
    {
      // Injection token
      provide: APP_INITIALIZER,
      useFactory: (rvc: RecentlyViewedService) => () => rvc.collectViewedProducts(),
      // dependency
      deps: [RecentlyViewedService],
      multi: true
    }
  ]
})
export class RecentlyViewedModule {
}
