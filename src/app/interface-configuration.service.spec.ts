import { TestBed } from '@angular/core/testing';

import { InterfaceConfigurationService } from './interface-configuration.service';

describe('InterfaceSelectionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterfaceConfigurationService = TestBed.get(InterfaceConfigurationService);
    expect(service).toBeTruthy();
  });
});
