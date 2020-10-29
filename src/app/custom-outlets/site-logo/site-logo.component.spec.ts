import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLogoComponent } from './site-logo.component';

describe('MyLogoComponent', () => {
  let component: SiteLogoComponent;
  let fixture: ComponentFixture<SiteLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
