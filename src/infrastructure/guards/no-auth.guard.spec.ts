import { NoAuthGuard } from './no-auth.guard';

describe('NoAuthGuard', () => {
  it('should be defined', () => {
    expect(new NoAuthGuard()).toBeDefined();
  });
});
