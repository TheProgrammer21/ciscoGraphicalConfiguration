import { TestBed } from '@angular/core/testing';

import { RoutingConfigurationService } from './routing-configuration.service';

describe('RoutingConfigurationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutingConfigurationService = TestBed.get(RoutingConfigurationService);
    expect(service).toBeTruthy();
  });
});
