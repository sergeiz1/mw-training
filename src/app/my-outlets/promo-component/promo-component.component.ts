import { Component, OnInit } from '@angular/core';
import { CurrentProductService } from '@spartacus/storefront';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-promo-component',
  templateUrl: './promo-component.component.html',
  styleUrls: ['./promo-component.component.scss']
})
export class PromoComponentComponent implements OnInit {

  manufacturer$ = this.currentProductService.getProduct().pipe(
    map(product => product.manufacturer)
  );

  constructor(private currentProductService: CurrentProductService) { }

  ngOnInit() {
  }

}
