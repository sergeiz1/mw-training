import {Product, ProductPageMetaResolver} from '@spartacus/core';
import {Injectable} from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomResolver extends ProductPageMetaResolver {

  resolveTitle(): Observable<string> {
    return this.product$.pipe(
      switchMap((product: Product) => {
        const title = product.name
              + this.resolveFirstCategory(product)
              + this.resolveManufacturer(product)
              + ' | ' + product.price.formattedValue;
        return this.translation.translate('pageMetaResolver.product.title', {
          title
        });
      })
    );
  }
}
