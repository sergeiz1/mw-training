import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpAvailabilityComponent } from './pdp-availability.component';

describe('PdpAvailabilityComponent', () => {
  let component: PdpAvailabilityComponent;
  let fixture: ComponentFixture<PdpAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdpAvailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdpAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
