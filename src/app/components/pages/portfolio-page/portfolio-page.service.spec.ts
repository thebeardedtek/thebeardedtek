import { TestBed } from '@angular/core/testing';

import { PortfolioPageService } from './portfolio-page.service';

describe('PortfolioPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortfolioPageService = TestBed.get(PortfolioPageService);
    expect(service).toBeTruthy();
  });
});
