import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentedComponent } from './talented.component';

describe('TalentedComponent', () => {
  let component: TalentedComponent;
  let fixture: ComponentFixture<TalentedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
