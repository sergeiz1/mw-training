import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomIntroComponent } from './custom-intro/custom-intro.component';
import { CustomSummaryComponent } from './custom-summary/custom-summary.component';
import {CmsConfig, ConfigModule} from '@spartacus/core';
import {StarRatingModule} from '@spartacus/storefront';


@NgModule({
  declarations: [CustomIntroComponent, CustomSummaryComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductIntroComponent: {
          component: CustomIntroComponent
        },
        ProductSummaryComponent: {
          component: CustomSummaryComponent
        }
      }
    } as CmsConfig),
    StarRatingModule
  ]
})
export class CustomPdpModule { }
