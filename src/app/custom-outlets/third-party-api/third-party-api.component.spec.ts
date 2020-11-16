import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyApiComponent } from './third-party-api.component';

describe('ThirdPartyApiComponent', () => {
  let component: ThirdPartyApiComponent;
  let fixture: ComponentFixture<ThirdPartyApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdPartyApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPartyApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
