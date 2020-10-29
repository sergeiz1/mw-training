import { Component, OnInit } from '@angular/core';
import {BREAKPOINT, PageLayoutHandler} from "@spartacus/storefront";
import {Observable} from "rxjs";
import {ActiveCartService, SelectiveCartService} from "@spartacus/core";

@Component({
  selector: 'app-custom-layout',
  templateUrl: './custom-layout.component.html',
  styleUrls: ['./custom-layout.component.scss']
})
export class CustomLayoutComponent implements PageLayoutHandler {

  constructor(protected activeCartService: ActiveCartService,
              protected  selectiveCartService: SelectiveCartService) { }

  slots$ = this.activeCartService.getEntries().subscribe();

  handle(slots$: Observable<string[]>,
         pageTemplate?: string,
         section?: string,
         breakpoint?: BREAKPOINT): Observable<string[]> {
    console.log(this.slots$);
    slots$.subscribe(data => {
      console.log(this.slots$);
    })
    console.log(pageTemplate);
    if(pageTemplate === 'cx-header') {

    }
    return undefined;
  }
}
