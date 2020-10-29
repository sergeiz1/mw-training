import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaModule, OutletRefModule } from '@spartacus/storefront';
import {MainBannerComponent} from './main-banner.component';


@NgModule({
    declarations: [MainBannerComponent],
    exports: [
      MainBannerComponent
    ],
  imports: [
    CommonModule,
    OutletRefModule,
    MediaModule
  ]
})
export class MainBannerModule { }
