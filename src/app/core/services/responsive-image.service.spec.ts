import { TestBed } from '@angular/core/testing';

import { ResponsiveImageService } from './responsive-image.service';

describe('ResponsiveImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponsiveImageService = TestBed.get(ResponsiveImageService);
    expect(service).toBeTruthy();
  });
});
