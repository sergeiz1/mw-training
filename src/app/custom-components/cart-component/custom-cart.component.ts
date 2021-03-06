import {Component} from '@angular/core';
import {
  CartDetailsComponent, PromotionService,
} from '@spartacus/storefront';
import {
  ActiveCartService, AuthService, OrderEntry, RoutingService,
  SelectiveCartService
} from '@spartacus/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './custom-cart.component.html',
  styleUrls: ['./custom-cart.component.scss']
})
export class CustomCartComponent extends CartDetailsComponent {

  cart$ = this.activeCartService.getActive();

  /* constructor(protected activeCartService: ActiveCartService,
              protected selectiveCartService: SelectiveCartService,
              protected promotionService: PromotionService,
              protected authService: AuthService,
              protected routingService: RoutingService) {
    super(activeCartService, promotionService, selectiveCartService, authService, routingService);
  } */

  changeQuantity(entry: OrderEntry, quantity: string): void {
      this.activeCartService.updateEntry(entry.entryNumber, +quantity);
  }

  removeEntry(entry: OrderEntry): void {
    this.activeCartService.removeEntry(entry);
  }
}
