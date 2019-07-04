import { TestBed } from '@angular/core/testing';

import { InterfaceSelectionsService } from './interface-selections.service';

describe('InterfaceSelectionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterfaceSelectionsService = TestBed.get(InterfaceSelectionsService);
    expect(service).toBeTruthy();
  });
});
