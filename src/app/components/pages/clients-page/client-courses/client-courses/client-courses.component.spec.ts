import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCoursesComponent } from './client-courses.component';

describe('ClientCoursesComponent', () => {
  let component: ClientCoursesComponent;
  let fixture: ComponentFixture<ClientCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
