import {Component} from '@angular/core';
import {CurrentProductService, ProductIntroComponent} from '@spartacus/storefront';
import {TranslationService, WindowRef} from '@spartacus/core';

@Component({
  selector: 'app-custom-intro',
  templateUrl: './custom-intro.component.html',
  styleUrls: ['./custom-intro.component.scss']
})
export class CustomIntroComponent extends ProductIntroComponent {

  currentProduct$ = this.currentProductService.getProduct();

  /* constructor(
    protected currentProductService: CurrentProductService,
    translationService: TranslationService,
    protected winRef: WindowRef) {
    super(currentProductService, translationService, winRef);
  } */

}
