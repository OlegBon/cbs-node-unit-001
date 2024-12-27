console.log("*** Start index.js \n");

import { sum, PI, Complex } from "./math.js";

console.log(`2 + 3 = ${sum(2, 3)}`);
console.log(`PI = ${PI}`);

const complex1 = new Complex(2, 3); // 2 + 3i
console.log(`Complex1: ${complex1.toString()}`);
const complex2 = new Complex(3, 4); // 3 + 4i
console.log(`Complex2: ${complex2.toString()}`);

const complexSum = complex1.add(complex2); // 5 + 7i

console.log(
  `Complex Sum: (${complex1.toString()}) + (${complex2.toString()}) = ${complexSum.toString()} \n`
);

console.log("*** End index.js \n");
