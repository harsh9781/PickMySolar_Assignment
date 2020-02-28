import { TestBed, async, inject } from '@angular/core/testing';

import { PqrsGuard } from './pqrs.guard';

describe('PqrsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PqrsGuard]
    });
  });

  it('should ...', inject([PqrsGuard], (guard: PqrsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
