import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {translationChunksConfig, translations} from '@spartacus/assets';
import {B2cStorefrontModule, CartPageLayoutHandler, LayoutConfig, PAGE_LAYOUT_HANDLER} from '@spartacus/storefront';
import {AppComponent} from './app.component';
import {CustomOutletsModule} from './custom-outlets/custom-outlets.module';
import {ConfigModule} from '@spartacus/core';
import {CustomLayoutModule} from "./custom-layout/custom-layout.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://spartacus-training.eastus.cloudapp.azure.com:8443',
          prefix: '/occ/v2/'
        }
      },
      context: {
        currency: ['USD'],
        language: ['en'],
        baseSite: ['electronics-spa']
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '3.0'
      },
    }),
    ConfigModule.withConfig({
      layoutSlots: {
        header: {
          slots: [
            'MiniCart'
          ]
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
    } as LayoutConfig),
    CustomOutletsModule,
    CustomLayoutModule
  ],
  providers: [
    {
      provide: PAGE_LAYOUT_HANDLER,
      useExisting: CartPageLayoutHandler,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
