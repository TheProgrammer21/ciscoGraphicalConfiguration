import { TestBed } from '@angular/core/testing';

import { AvailableInterfacesService } from './available-interfaces.service';

describe('AvailableInterfacesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvailableInterfacesService = TestBed.get(AvailableInterfacesService);
    expect(service).toBeTruthy();
  });
});
