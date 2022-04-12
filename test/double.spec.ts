import double from '../src/double';

describe('double', () => {
  it('2 => 4', () => {
    expect(double(2)).toBe(4);
  });
  it('0 => 0', () => {
    expect(double(0)).toBe(0);
  });
});
