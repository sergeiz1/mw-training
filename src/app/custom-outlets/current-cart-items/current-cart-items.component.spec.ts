import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCartItemsComponent } from './current-cart-items.component';

describe('CurrentCartItemsComponent', () => {
  let component: CurrentCartItemsComponent;
  let fixture: ComponentFixture<CurrentCartItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentCartItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
