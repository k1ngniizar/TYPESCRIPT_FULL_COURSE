function fn1(a: number, b: number): number {
  return a + b;
}

console.log(fn1(1, 2));

const nums = [1, 2, 3];

const doubled: number[] = nums.map((n: number): number => n * 2);

console.log(doubled);

function checkCord(point: { x: number; y: number }): number {
  return Math.hypot(point.x, point.y);
}

console.log(checkCord({ x: 2, y: 3 }));

// Always try to annotate params

const time = (n: number) => n * 2;
console.log(time(20));

const convertToUppercase = (s: string) => s.toUpperCase();
console.log(convertToUppercase("ebenezer"));
