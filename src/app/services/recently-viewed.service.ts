import {Injectable} from '@angular/core';
import {Subscription} from 'rxjs';
import {Product} from '@spartacus/core';
import {CurrentProductService} from '@spartacus/storefront';
import {distinct, filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecentlyViewedService {

  // TODO Observable - changes detection mechanism - push a new value if emitted
  recentlyViewedProducts: Product[] = [];

  constructor(private currentProductService: CurrentProductService) {}

  collectViewedProducts(): Subscription {
    return this.currentProductService.getProduct().pipe(
      filter(product => Boolean(product)), // not empty
      distinct(product => product.code),
    ).subscribe( product => {
      this.recentlyViewedProducts.push(product)
    });
  }
}
