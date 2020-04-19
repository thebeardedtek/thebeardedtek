import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoursesComponent } from './ecourses.component';

describe('EcoursesComponent', () => {
  let component: EcoursesComponent;
  let fixture: ComponentFixture<EcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
