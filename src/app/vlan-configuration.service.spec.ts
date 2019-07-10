import { TestBed } from '@angular/core/testing';

import { VlanConfigurationService } from './vlan-configuration.service';

describe('VlanConfigurationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VlanConfigurationService = TestBed.get(VlanConfigurationService);
    expect(service).toBeTruthy();
  });
});
