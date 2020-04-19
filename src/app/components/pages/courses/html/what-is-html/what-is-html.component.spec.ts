import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsHtmlComponent } from './what-is-html.component';

describe('WhatIsHtmlComponent', () => {
  let component: WhatIsHtmlComponent;
  let fixture: ComponentFixture<WhatIsHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
