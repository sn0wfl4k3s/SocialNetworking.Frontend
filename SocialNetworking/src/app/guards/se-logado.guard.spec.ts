import { TestBed } from '@angular/core/testing';

import { SeLogadoGuard } from './se-logado.guard';

describe('SeLogadoGuard', () => {
  let guard: SeLogadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SeLogadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
