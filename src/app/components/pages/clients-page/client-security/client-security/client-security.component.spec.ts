import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSecurityComponent } from './client-security.component';

describe('ClientSecurityComponent', () => {
  let component: ClientSecurityComponent;
  let fixture: ComponentFixture<ClientSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
