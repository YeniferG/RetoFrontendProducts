import { TestBed } from '@angular/core/testing';

import { ProductsCatsApiService } from './products-cats-api.service';

describe('ProductsCatsApiService', () => {
  let service: ProductsCatsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsCatsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
