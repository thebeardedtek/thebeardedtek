import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCtaComponent } from './portfolio-cta.component';

describe('PortfolioCtaComponent', () => {
  let component: PortfolioCtaComponent;
  let fixture: ComponentFixture<PortfolioCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioCtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
