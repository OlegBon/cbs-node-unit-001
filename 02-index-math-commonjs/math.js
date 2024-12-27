console.log("*** Start math.js \n");

function sum(a, b) {
  return a + b;
}

const PI = 3.1415926;

class Complex {
  constructor(re, im) {
    this.re = re;
    this.im = im;
  }

  add(other) {
    return new Complex(this.re + other.re, this.im + other.im);
  }

  subtract(other) {
    return new Complex(this.re - other.re, this.im - other.im);
  }

  toString() {
    return `${this.re} + ${this.im}i`;
  }
}

console.log("*** End math.js \n");

module.exports = { sum, PI, Complex };
