import { Injectable } from '@angular/core';
import {SeoMetaService} from "@spartacus/storefront";
import {PageMetaService} from "@spartacus/core";
import {Meta, Title} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class CustomSeoMetaService extends SeoMetaService {

  constructor(protected ngTitle: Title,
              protected ngMeta: Meta,
              protected pageMetaService: PageMetaService) {
    super(ngTitle, ngMeta, pageMetaService);
    this.addTag({name: 'twitter:title', content: 'twitter'});
    this.addTag({name: 'twitter:image', content: 'summary'})
  }
}
