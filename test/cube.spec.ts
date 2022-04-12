import cube from '../src/cube';

describe('cube', () => {
  it('2 => 8', () => {
    expect(cube(2)).toBe(8);
  });
  it('6 => 216', () => {
    expect(cube(6)).toBe(216);
  });
});
