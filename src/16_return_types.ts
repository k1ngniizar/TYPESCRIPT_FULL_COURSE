//inference
const doubleFunc = (n: number) => n * 2;

export function yourTitle(s: string) {
  return `Your title ${s}`;
}

async function loadCountIn() {
  return 42;
}

//explicit return for exported/public functions
const tripleFunction = (n: number): number => n * 3;
export function toTitle(s: string): string {
  return `My title ${s}`;
}

function booleanToNumber(flag: boolean): number {
  const checkFlag = flag ? 1 : 0;
  return checkFlag;
}

function booleanToString(flag: boolean): string {
  if (flag) {
    return "Flag";
  } else {
    return "Not flag";
  }
}

async function loadCountEx(): Promise<number> {
  return 43;
}
