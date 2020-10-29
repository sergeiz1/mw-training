import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '@spartacus/core';
import {Observable} from "rxjs";
import {map, switchMap} from "rxjs/operators";
import {product} from "@spartacus/assets/translations/en/product";

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss']
})
export class MainBannerComponent implements OnInit {

  listOfProducts = ['478828', '855246', '493683', '816802'];
  product$: Observable<Product>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.randomShowProduct(Math.floor(Math.random() * this.listOfProducts.length));
    }, 2000);
  }

  randomShowProduct(random) {
    this.product$ = this.productService.get(this.listOfProducts[random]);
  }
}
