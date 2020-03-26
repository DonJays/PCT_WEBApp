import { TestBed } from '@angular/core/testing';

import { PortalquestionsService } from './portalquestions.service';

describe('PortalquestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortalquestionsService = TestBed.get(PortalquestionsService);
    expect(service).toBeTruthy();
  });
});
