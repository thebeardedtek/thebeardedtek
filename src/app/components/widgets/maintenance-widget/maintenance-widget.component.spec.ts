import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceWidgetComponent } from './maintenance-widget.component';

describe('MaintenanceWidgetComponent', () => {
  let component: MaintenanceWidgetComponent;
  let fixture: ComponentFixture<MaintenanceWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
