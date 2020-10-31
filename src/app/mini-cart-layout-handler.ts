import {Injectable} from '@angular/core';
import {BREAKPOINT, PageLayoutHandler} from '@spartacus/storefront';
import {combineLatest, Observable} from 'rxjs';
import {ActiveCartService} from '@spartacus/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MiniCartLayoutHandler implements PageLayoutHandler {

  constructor(protected activeCartService: ActiveCartService) {}

  handle(slots$: Observable<string[]>,
         pageTemplate?: string,
         section?: string,
         breakpoint?: BREAKPOINT): Observable<string[]> {
    if (section === 'header') {
      // emit the last emitted value from each observable
      // will not emit an initial value until each observable emits at least one value
      return combineLatest([
        slots$,
        // Returns active cart
        this.activeCartService.getActive()
      ]).pipe(map(([slots, cart]) => {
         return Object.keys(cart).length === 0 || cart.totalItems === 0
           ? slots.filter((slot) => slot !== 'MiniCart')
           : slots;
        })
      );
    }
    return slots$;
  }
}
