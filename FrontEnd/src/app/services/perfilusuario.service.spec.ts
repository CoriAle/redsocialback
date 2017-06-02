import { TestBed, inject } from '@angular/core/testing';

import { PerfilusuarioService } from './perfilusuario.service';

describe('PerfilusuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerfilusuarioService]
    });
  });

  it('should be created', inject([PerfilusuarioService], (service: PerfilusuarioService) => {
    expect(service).toBeTruthy();
  }));
});
