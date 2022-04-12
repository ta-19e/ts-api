import sum from '../src/sum';

describe('sum', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('adds 3 + 5 to equal 8', () => {
    expect(sum(3, 5)).toBe(8);
  });
});

describe('example', () => {
  it('1 + 2 = 3', () => {
    expect(1 + 2).toBe(3);
  });
});
