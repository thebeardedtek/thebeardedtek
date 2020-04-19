import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingHeaderComponent } from './pricing-header.component';

describe('PricingHeaderComponent', () => {
  let component: PricingHeaderComponent;
  let fixture: ComponentFixture<PricingHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
