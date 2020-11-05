import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Product, ProductSearchPage, ProductSearchService, SearchConfig} from "@spartacus/core";
import {CurrentProductService} from "@spartacus/storefront";
import {Observable, of} from "rxjs";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-product-upselling',
  templateUrl: './product-upselling.component.html',
  styleUrls: ['./product-upselling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// TODO improve
export class ProductUpsellingComponent implements OnInit {

  title = 'You might also be interested in:';

  products$: Observable<Observable<Product>[]> = this.productSearchService.getResults().pipe(
    filter(result => !!result && result.hasOwnProperty('products')),
    map((result: ProductSearchPage) => result.products),
    map((products: Product[]) => products.map(products => of(products))), // products array of products observable
  );

  constructor(
    private productSearchService: ProductSearchService,
    private currentProductService: CurrentProductService) { }


  ngOnInit(): void {
    this.currentProductService.getProduct().pipe(
      filter(product =>!!product && product.hasOwnProperty('name')),
      map(product => product.name)
    ).subscribe(productName => {
        this.productSearchService.search(productName, { pageSize: 20} as SearchConfig)
    })
  }

}
