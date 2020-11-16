import { Component} from '@angular/core';
import {CurrentProductService, ProductSummaryComponent} from '@spartacus/storefront';
import {map, switchMap} from 'rxjs/operators';
import {ActiveCartService} from '@spartacus/core';

@Component({
  selector: 'app-pdp',
  templateUrl: './custom-summary.component.html',
  styleUrls: ['./custom-summary.component.scss']
})
export class CustomSummaryComponent extends ProductSummaryComponent {

  currentProduct$ = this.currentProductService.getProduct();

  currentProductQtyInCart$ = this.currentProductService.getProduct().pipe(
    map(product => product.code),
    switchMap(code => this.activeCartService.getEntry(code)),
    map(entry => entry ? entry.quantity : 0)
  );

  constructor(protected currentProductService: CurrentProductService,
              protected activeCartService: ActiveCartService) {
    super(currentProductService);
  }

}
