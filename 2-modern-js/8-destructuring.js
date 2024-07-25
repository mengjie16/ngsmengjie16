// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 }  = Math;

// With require
const { readFile } = require('fs');

//>readFile
// [Function]

const circle = {
  label: 'circleX',
  radius: 2,
};

const circleArea = ({ radius }) =>
  (PI * radius * radius).toFixed(2);

console.log(
  circleArea(circle)
);
const circleArea2 = ({ radius },{precision=2}={}) =>
    (PI * radius * radius).toFixed(precision);
console.log(
    circleArea2(circle,{precision:5})
  );