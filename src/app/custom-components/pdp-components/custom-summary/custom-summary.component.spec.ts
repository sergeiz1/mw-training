import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSummaryComponent } from './custom-summary.component';

describe('PdpComponent', () => {
  let component: CustomSummaryComponent;
  let fixture: ComponentFixture<CustomSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
