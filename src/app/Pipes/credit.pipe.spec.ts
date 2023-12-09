import { CreditPipe } from './credit.pipe';

describe('CreditPipe', () => {
  it('create an instance', () => {
    const pipe = new CreditPipe();
    expect(pipe).toBeTruthy();
  });
});
