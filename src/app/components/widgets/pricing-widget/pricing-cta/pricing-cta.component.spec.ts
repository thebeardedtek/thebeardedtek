import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCtaComponent } from './pricing-cta.component';

describe('PricingCtaComponent', () => {
  let component: PricingCtaComponent;
  let fixture: ComponentFixture<PricingCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingCtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
