import { TestBed } from '@angular/core/testing';


import { UserAuthenticationService } from './user-authantication.service';

describe('UserAuthanticationService', () => {
  let service: UserAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
