import { Component, OnInit } from '@angular/core';
import {CurrentProductService} from '@spartacus/storefront';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-pdp-availability',
  templateUrl: './pdp-availability.component.html',
  styleUrls: ['./pdp-availability.component.scss']
})
export class PdpAvailabilityComponent implements OnInit {

  constructor(private currentProductService: CurrentProductService) { }

  availability$ = this.currentProductService.getProduct().pipe(
    map(product => product.availableForPickup)
  );

  ngOnInit(): void {
  }

}
