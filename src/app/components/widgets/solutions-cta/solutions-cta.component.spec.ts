import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsCtaComponent } from './solutions-cta.component';

describe('SolutionsCtaComponent', () => {
  let component: SolutionsCtaComponent;
  let fixture: ComponentFixture<SolutionsCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionsCtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
