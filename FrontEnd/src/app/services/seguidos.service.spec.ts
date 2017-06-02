import { TestBed, inject } from '@angular/core/testing';

import { SeguidosService } from './seguidos.service';

describe('SeguidosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeguidosService]
    });
  });

  it('should be created', inject([SeguidosService], (service: SeguidosService) => {
    expect(service).toBeTruthy();
  }));
});
