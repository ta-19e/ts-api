import factorial from '../src/factorial';

describe('factorial', () => {
  it('6 => 720', () => {
    expect(factorial(6)).toBe(720);
  });
  it('0 => 0', () => {
    expect(factorial(0)).toBe(1);
  });
});
