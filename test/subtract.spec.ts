import subtract from '../src/subtract';

describe('sum', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(subtract(3, 2)).toBe(1);
  });
  it('adds 3 + 5 to equal 8', () => {
    expect(subtract(3, 1)).toBe(2);
  });
});
