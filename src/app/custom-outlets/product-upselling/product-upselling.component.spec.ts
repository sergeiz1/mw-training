import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpsellingComponent } from './product-upselling.component';

describe('ProductUpsellingComponent', () => {
  let component: ProductUpsellingComponent;
  let fixture: ComponentFixture<ProductUpsellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUpsellingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUpsellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
