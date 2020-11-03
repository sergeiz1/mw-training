import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfigModule} from '@spartacus/core';
import {LayoutConfig} from '@spartacus/storefront';

@NgModule({
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      layoutSlots: {
        header: {
          lg: {
            slots: [
              'NavigationBar', 'SiteLogo', 'SearchBox', 'SiteLogin', 'MiniCart'
            ]
          }
        },
        ProductDetailsPageTemplate: {
          slots: [
            'Summary', 'UpSelling', 'CrossSelling', 'SiteLinks', 'PlaceholderContentSlot'
          ]
        },
        SearchResultsListPageTemplate: {
          slots: [
            'Section2', 'ProductLeftRefinements', 'SearchResultsListSlot'
          ],
          lg: {
            slots: [
              'Section2', 'ProductLeftRefinements', 'SearchResultsListSlot'
            ]
          },
          md: {
            slots: [
              'Section2', 'ProductLeftRefinements', 'SearchResultsListSlot'
            ]
          },
          sm: {
            slots: [
              'ProductLeftRefinements', 'SearchResultsListSlot'
            ]
          },
          xs: {
            slots: [
              'ProductLeftRefinements', 'SearchResultsListSlot'
            ]
          }
        }
      }
    } as LayoutConfig)
  ]
})

export class LayoutModule {}
