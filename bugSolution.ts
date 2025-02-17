function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error("Both inputs must be numbers.");
  }
}

function subtractSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a - b;
  } else {
    throw new Error("Both inputs must be numbers.");
  }
}

let result1 = add(5, 3); // Correct
let result2 = subtract(10, 4); // Correct

let result3 = addSafe(5, "3"); // Throws an error
let result4 = subtractSafe(10, "4"); // Throws an error