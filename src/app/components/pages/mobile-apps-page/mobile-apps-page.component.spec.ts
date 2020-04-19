import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppsPageComponent } from './mobile-apps-page.component';

describe('MobileAppsPageComponent', () => {
  let component: MobileAppsPageComponent;
  let fixture: ComponentFixture<MobileAppsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileAppsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAppsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
