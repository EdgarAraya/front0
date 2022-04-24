import { TestBed } from '@angular/core/testing';

import { IntegranteServicesService } from './integrante-services.service';

describe('IntegranteServicesService', () => {
  let service: IntegranteServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntegranteServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
