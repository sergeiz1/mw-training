import { Injectable } from '@angular/core';
import {AuthService, Order, OrderHistory, Product, UserOrderConnector, UserOrderService} from '@spartacus/core';
import {Observable} from 'rxjs';
import {filter, map, mergeAll, mergeMap, pluck, scan, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecentlyBoughtService {

  constructor(
    private userOrderService: UserOrderService,
    private userOrderConnector: UserOrderConnector,
    private authService: AuthService
  ) { }

  private getUserId(): Observable<string> {
    return this.authService.getOccUserId().pipe(take(1));
  }

  private getOrder(code: string): Observable<Order> {
    return this.getUserId().pipe(
      mergeMap(userId => this.userOrderConnector.get(userId, code))
    );
  }


  getRecentlyBoughtProducts(): Observable<Product[]> {
    return this.userOrderService.getOrderHistoryList(5).pipe(
      map(data => data.orders),
      filter(orders => orders.length > 0),
      // convert Observable<OrderHistory[]> to Observable<OrderHistory>
      mergeAll(),
      // get code of the order
      map((order: OrderHistory) => order.code),
      // OrderHistory has no information about ordered products
      mergeMap((code) => this.getOrder(code)),
      // take entries from each order and merge them into a stream of OrderEntries
      mergeMap((order: Order) => order.entries),
      // take product from order entry
      pluck('product'),
      // merge all products into single array -> reduce
      scan((products: Product[], product: Product) => [...products, product], [])
    );
  }
}

