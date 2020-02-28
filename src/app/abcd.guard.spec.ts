import { TestBed, async, inject } from '@angular/core/testing';

import { AbcdGuard } from './abcd.guard';

describe('AbcdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbcdGuard]
    });
  });

  it('should ...', inject([AbcdGuard], (guard: AbcdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
