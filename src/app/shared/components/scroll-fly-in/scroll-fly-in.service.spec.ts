import { TestBed } from '@angular/core/testing';

import { ScrollFlyInService } from './scroll-fly-in.service';

describe('ScrollFlyInService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrollFlyInService = TestBed.get(ScrollFlyInService);
    expect(service).toBeTruthy();
  });
});
