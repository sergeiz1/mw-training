import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {translationChunksConfig, translations} from '@spartacus/assets';
import {B2cStorefrontModule, LayoutConfig, PAGE_LAYOUT_HANDLER} from '@spartacus/storefront';
import {AppComponent} from './app.component';
import {CustomOutletsModule} from './custom-outlets/custom-outlets.module';
import {ConfigModule} from '@spartacus/core';
import {CustomComponentsModule} from './custom-components/custom-components.module';
import {MiniCartLayoutHandler} from './mini-cart-layout-handler';

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
    CustomComponentsModule
  ],
  providers: [
    {
      provide: PAGE_LAYOUT_HANDLER,
      useExisting: MiniCartLayoutHandler,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
