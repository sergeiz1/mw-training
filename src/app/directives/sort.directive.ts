import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {Sort} from './util/sort';
import {OrderEntry} from '@spartacus/core';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {

  @Input() tableSort: Array<OrderEntry[]>;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  @HostListener('click')
  sortTable(): void {
    const sort = new Sort();
    const element = this.elementRef.nativeElement;
    const order = element.getAttribute('order');
    const property = element.getAttribute('data-name');

    // this.tableSort.sort(sort.startSort(property, order));
    this.tableSort = this.tableSort.slice().sort(sort.startSort(property, order));
    order === 'desc'
      ? element.setAttribute('order', 'asc')
      : element.setAttribute('order', 'desc');

  }
}
