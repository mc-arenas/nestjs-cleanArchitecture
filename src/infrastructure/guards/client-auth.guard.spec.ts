import { ClientAuthGuard } from './client-auth.guard';

describe('ClientAuthGuard', () => {
  it('should be defined', () => {
    expect(new ClientAuthGuard()).toBeDefined();
  });
});
