import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomOutletsComponent } from './custom-outlets.component';

describe('MyOutletsComponent', () => {
  let component: CustomOutletsComponent;
  let fixture: ComponentFixture<CustomOutletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomOutletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomOutletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
