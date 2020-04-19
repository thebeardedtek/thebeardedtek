import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityCtaComponent } from './security-cta.component';

describe('SecurityCtaComponent', () => {
  let component: SecurityCtaComponent;
  let fixture: ComponentFixture<SecurityCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityCtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
