import { Component } from '@angular/core';
import {ActiveCartService, Order, RoutingService, UserOrderService} from '@spartacus/core';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.component.html',
  styleUrls: ['./reorder.component.scss']
})
export class ReorderComponent {

  constructor(
    private userOrderService: UserOrderService,
    private activeCartService: ActiveCartService,
    private routingService: RoutingService) { }

  reOrder(): void {
    this.userOrderService.getOrderDetails().pipe(
      // TODO automatically unsubscribe after 1 was taken ?
      take(1)
    ).subscribe(order => {
      this.addToCart(order);
      this.routingService.go({cxRoute: 'checkout'});
    });
  }

  private addToCart(order: Order): void {
    order.entries.forEach(entry => {
      this.activeCartService.addEntry(entry.product.code, entry.quantity);
    });
  }

}
