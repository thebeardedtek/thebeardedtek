import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingTableQuestionsComponent } from './pricing-table-questions.component';

describe('PricingTableQuestionsComponent', () => {
  let component: PricingTableQuestionsComponent;
  let fixture: ComponentFixture<PricingTableQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingTableQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingTableQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
