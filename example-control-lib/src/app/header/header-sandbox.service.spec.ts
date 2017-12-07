import { TestBed, inject } from '@angular/core/testing';

import { HeaderSandboxService } from './header-sandbox.service';

describe('HeaderSandboxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderSandboxService]
    });
  });

  it('should be created', inject([HeaderSandboxService], (service: HeaderSandboxService) => {
    expect(service).toBeTruthy();
  }));
});
