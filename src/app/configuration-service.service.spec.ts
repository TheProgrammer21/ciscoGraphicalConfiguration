import { TestBed } from '@angular/core/testing';

import { ConfigurationService } from './configuration-service.service';

describe('ConfigurationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigurationService = TestBed.get(ConfigurationService);
    expect(service).toBeTruthy();
  });
});
