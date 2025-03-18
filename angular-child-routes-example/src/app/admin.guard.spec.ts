import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AdminGuard } from './admin.guard';

describe('AdminGuard', () => {
  let guard: AdminGuard;
  const mockRouter = { navigate: jasmine.createSpy('navigate') }; // Mocked Router

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AdminGuard,
        { provide: Router, useValue: mockRouter } // Provide only the Router dependency
      ]
    });
    guard = TestBed.inject(AdminGuard);
  });

  it('should be instantiated', () => {
    expect(guard).toBeTruthy();
  });
});
