import { Component, OnInit } from '@angular/core';
import {CurrentProductService} from "@spartacus/storefront";
import {ActiveCartService} from "@spartacus/core";
import {map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-current-cart-items',
  templateUrl: './current-cart-items.component.html',
  styleUrls: ['./current-cart-items.component.scss']
})
export class CurrentCartItemsComponent implements OnInit {

  currentProductQuantity$ = this.currentProductService.getProduct().pipe(
    map(product => product.code),
    switchMap(code => this.activeCartService.getEntry(code)),
    map(entry => entry ? entry.quantity : 0)
  );

  constructor(private currentProductService: CurrentProductService, private activeCartService: ActiveCartService) { }

  ngOnInit(): void { }

}
