import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletRefModule } from '@spartacus/storefront';
import { SiteLogoComponent } from './site-logo.component';


@NgModule({
    declarations: [SiteLogoComponent],
    exports: [
      SiteLogoComponent
    ],
  imports: [
    CommonModule,
    OutletRefModule
  ]
})
export class SiteLogoModule { }
