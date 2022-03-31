import { TestBed } from '@angular/core/testing';

import { ApiHuevosService } from './api-huevos.service';

describe('ApiHuevosService', () => {
  let service: ApiHuevosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHuevosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
