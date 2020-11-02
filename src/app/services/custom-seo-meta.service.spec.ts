import { TestBed } from '@angular/core/testing';

import { CustomSeoMetaService } from './custom-seo-meta.service';

describe('CustomSeoMetaService', () => {
  let service: CustomSeoMetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomSeoMetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
