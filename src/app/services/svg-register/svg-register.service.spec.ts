import { TestBed } from '@angular/core/testing';

import { SvgRegisterService } from './svg-register.service';

describe('SvgRegisterService', () => {
  let service: SvgRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
