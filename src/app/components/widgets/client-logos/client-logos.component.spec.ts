import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLogosComponent } from './client-logos.component';

describe('ClientLogosComponent', () => {
  let component: ClientLogosComponent;
  let fixture: ComponentFixture<ClientLogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientLogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
