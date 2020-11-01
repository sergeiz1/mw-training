import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomIntroComponent } from './custom-intro.component';

describe('CustomIntroComponent', () => {
  let component: CustomIntroComponent;
  let fixture: ComponentFixture<CustomIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
