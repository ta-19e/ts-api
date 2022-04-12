import square from '../src/square';

describe('square', () => {
  it('3 => 9', () => {
    expect(square(2)).toBe(4);
  });
  it('0 => 0', () => {
    expect(square(0)).toBe(0);
  });
});
