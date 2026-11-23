function sumAllNumbers(...xs: number[]): number {
  return xs.reduce((s, n) => s + n, 0);
}

console.log(sumAllNumbers(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));

//Tuple rest
function makeRange(
  ...args: [start: number, end: number, step?: number]
): number[] {
  const [start, end, step = 1] = args;
  const out: number[] = [];

  for (let n = start; n <= end; n += step) out.push(n);

  return out;
}

function draw(x: number, y: number) {
  console.log(x, y);
}

const points = [2, 4] as const;
draw(2, 4);

draw(...points);
