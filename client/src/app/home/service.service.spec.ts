import { TestBed } from '@angular/core/testing';

import { ServiceService } from './course.service';

describe('ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceService = TestBed.get(ServiceService);
    expect(service).toBeTruthy();
  });
});
