/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Signup4ServiceService } from './signup4-service.service';

describe('Service: Signup4Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Signup4ServiceService]
    });
  });

  it('should ...', inject([Signup4ServiceService], (service: Signup4ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
