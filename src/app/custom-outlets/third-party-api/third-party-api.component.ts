import { Component } from '@angular/core';
import {CurrentProductService} from '@spartacus/storefront';
import {Observable} from 'rxjs';
import {filter, switchMap} from 'rxjs/operators';
import {PicsumAdapter} from './picsum-adapter';
import {PicsumImage} from './picsum-image';

@Component({
  selector: 'app-third-party-api',
  templateUrl: './third-party-api.component.html',
  styleUrls: ['./third-party-api.component.scss']
})
export class ThirdPartyApiComponent {

  picsumImage$: Observable<PicsumImage> = this.currentProductService.getProduct().pipe(
    filter(product => Boolean(product)),
    switchMap(product => this.picsumAdapter.getImage(product.code.substr(0, 3)))
  );

  constructor(private currentProductService: CurrentProductService, private picsumAdapter: PicsumAdapter) { }

}
