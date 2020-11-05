import { Component, OnInit } from '@angular/core';
import {RecentlyViewedService} from "../../services/recently-viewed.service";
import {Observable, of} from "rxjs";
import {Product} from "@spartacus/core";

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss']
})
export class RecentlyViewedComponent implements OnInit {

  products$: Observable<Product>[] = this.recentlyViewedService.viewedProducts.map(product => of(product));
  p$ =  this.recentlyViewedService.viewedP$;

  constructor(private recentlyViewedService: RecentlyViewedService) { }

  ngOnInit(): void {
    console.log(this.p$);
  }

}
