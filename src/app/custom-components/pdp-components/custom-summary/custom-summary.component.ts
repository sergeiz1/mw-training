import { Component} from '@angular/core';
import {CurrentProductService, ProductSummaryComponent} from '@spartacus/storefront';

@Component({
  selector: 'app-pdp',
  templateUrl: './custom-summary.component.html',
  styleUrls: ['./custom-summary.component.scss']
})
export class CustomSummaryComponent extends ProductSummaryComponent {

  currentProduct$ = this.currentProductService.getProduct();

  constructor(protected currentProductService: CurrentProductService) {
    super(currentProductService);
  }

}
