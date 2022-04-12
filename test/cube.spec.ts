import cube from '../src/cube';

describe('cube', () => {
  it('2 => 8', () => {
    expect(cube(2)).toBe(8);
  });
  it('0 => 0', () => {
    expect(cube(0)).toBe(0);
  });
});
