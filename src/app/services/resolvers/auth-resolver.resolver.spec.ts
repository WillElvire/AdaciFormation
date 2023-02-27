import { TestBed } from '@angular/core/testing';

import { AuthResolverResolver } from './auth-resolver.resolver';

describe('AuthResolverResolver', () => {
  let resolver: AuthResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AuthResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
