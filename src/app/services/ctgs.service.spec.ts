import { TestBed, inject } from '@angular/core/testing';

import { CtgsService } from './ctgs.service';

describe('CtgsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CtgsService]
    });
  });

  it('should be created', inject([CtgsService], (service: CtgsService) => {
    expect(service).toBeTruthy();
  }));
});
