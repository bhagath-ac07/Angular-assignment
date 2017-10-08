/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServerResolverService } from './server-resolver.service';

describe('Service: ServerResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerResolverService]
    });
  });

  it('should ...', inject([ServerResolverService], (service: ServerResolverService) => {
    expect(service).toBeTruthy();
  }));
});