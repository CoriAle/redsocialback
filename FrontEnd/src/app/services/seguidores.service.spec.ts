import { TestBed, inject } from '@angular/core/testing';

import { SeguidoresService } from './seguidores.service';

describe('SeguidoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeguidoresService]
    });
  });

  it('should be created', inject([SeguidoresService], (service: SeguidoresService) => {
    expect(service).toBeTruthy();
  }));
});
