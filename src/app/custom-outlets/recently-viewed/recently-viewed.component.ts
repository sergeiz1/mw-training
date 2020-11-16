import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {RecentlyViewedService} from '../../services/recently-viewed.service';
import {Observable, of} from 'rxjs';
import {Product} from '@spartacus/core';


@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss']
})
export class RecentlyViewedComponent implements AfterViewChecked {

  title = 'Recently viewed';

  recentlyViewedProducts$: Observable<Product>[]

  constructor(private recentlyViewedService: RecentlyViewedService) {}

  ngAfterViewChecked() {
    this.recentlyViewedProducts$  = this.recentlyViewedService.recentlyViewedProducts.map(product => of(product));
  }
}
