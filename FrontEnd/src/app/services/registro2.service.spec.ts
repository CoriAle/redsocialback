import { TestBed, inject } from '@angular/core/testing';

import { Registro2Service } from './registro2.service';

describe('Registro2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Registro2Service]
    });
  });

  it('should be created', inject([Registro2Service], (service: Registro2Service) => {
    expect(service).toBeTruthy();
  }));
});
