import { TestBed, inject } from '@angular/core/testing';

import { FooterSandboxService } from './footer-sandbox.service';

describe('FooterSandboxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FooterSandboxService]
    });
  });

  it('should be created', inject([FooterSandboxService], (service: FooterSandboxService) => {
    expect(service).toBeTruthy();
  }));
});
