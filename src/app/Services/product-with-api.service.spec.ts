import { TestBed } from '@angular/core/testing';

import { ProductWithApiService } from './product-with-api.service';

describe('ProductWithApiService', () => {
  let service: ProductWithApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductWithApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
