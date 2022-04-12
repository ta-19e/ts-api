import subtract from '../src/subtract';

describe('subtract', () => {
  it('5-3=2', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it('5-(-3)=8', () => {
    expect(subtract(5, -3)).toBe(8);
  });

  it('-5-3=-8', () => {
    expect(subtract(-5, 3)).toBe(-8);
  });

  it('-5-(-3)=-2', () => {
    expect(subtract(-5, -3)).toBe(-2);
  });
});
