export default function factorial(a: number): number {
  if (a === 0) return 1;
  return a * factorial(a - 1);
}
