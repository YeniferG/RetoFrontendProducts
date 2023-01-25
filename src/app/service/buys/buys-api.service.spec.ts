/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BuysApiService } from './buys-api.service';

describe('Service: BuysApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuysApiService]
    });
  });

  it('should ...', inject([BuysApiService], (service: BuysApiService) => {
    expect(service).toBeTruthy();
  }));
});
