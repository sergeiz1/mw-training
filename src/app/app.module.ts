import {NgModule} from '@angular/core';
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {translationChunksConfig, translations} from '@spartacus/assets';
import {
  B2cStorefrontModule,
  JsonLdBuilderModule,
  PAGE_LAYOUT_HANDLER,
  PageComponentModule, SeoMetaService
} from '@spartacus/storefront';
import {AppComponent} from './app.component';
import {CustomOutletsModule} from './custom-outlets/custom-outlets.module';
import {
  ConfigModule,
  PageMetaResolver,
  RoutingConfig
} from '@spartacus/core';
import {CustomComponentsModule} from './custom-components/custom-components.module';
import {MiniCartLayoutHandler} from './mini-cart-layout-handler';
import {CommonModule} from "@angular/common";
import {CustomSeoMetaService} from "./services/custom-seo-meta.service";
import {CustomResolver} from "./resolvers/custom-resolver";
import {LayoutModule} from "./configs/layout/layout.module";
import {SessionModule} from "./configs/session/session.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          // baseUrl: 'https://spartacus-training.eastus.cloudapp.azure.com:8443',
          baseUrl: 'https://localhost:9002',
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
    SessionModule,
    LayoutModule,
    ConfigModule.withConfig({
      routing: {
        routes: {
          product: {
            paths: [
              'product/:productCode/:name/:prettyName',
              'product/:productCode/:prettyName',
              'product/:productCode/:name'
            ]
          }
        }
      }
    } as RoutingConfig),
    CustomOutletsModule,
    CustomComponentsModule,
    PageComponentModule,
    CommonModule,
    BrowserTransferStateModule,
    JsonLdBuilderModule
  ],
  providers: [
    {
      provide: PAGE_LAYOUT_HANDLER,
      useExisting: MiniCartLayoutHandler,
      multi: true
    },
    {
      provide: PageMetaResolver,
      useClass: CustomResolver,
      multi: true
    },
    {
      provide: SeoMetaService,
      useClass: CustomSeoMetaService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
