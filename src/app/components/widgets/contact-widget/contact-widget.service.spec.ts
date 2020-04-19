import { TestBed } from '@angular/core/testing';

import { ContactWidgetService } from './contact-widget.service';

describe('ContactWidgetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactWidgetService = TestBed.get(ContactWidgetService);
    expect(service).toBeTruthy();
  });
});
