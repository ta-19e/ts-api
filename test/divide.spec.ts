import divide from '../src/divide';

describe('divide', () => {
  it('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
  });
  it('divides 5 / 5 to equal 1', () => {
    expect(divide(5, 5)).toBe(1);
  });
});

describe('example', () => {
  it('10 / 10 = 1', () => {
    expect(10 / 10).toBe(1);
  });
});
