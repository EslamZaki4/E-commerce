import { TestBed } from '@angular/core/testing';

import { UserIService } from './user-i.service';

describe('UserIService', () => {
  let service: UserIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
