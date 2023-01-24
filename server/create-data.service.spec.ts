import { TestBed } from '@angular/core/testing';

import { CreateDataService } from "./CreateDataService";

describe('CreateDataService', () => {
  let service: CreateDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
