var pow = (x, y) => {
  return Math.pow(x, y);
} 

pow(2, 3);
// 8

var round1 = (x) => {
  return Math.round(x);
} 

round1(0.49);
// 0


var round2 = (x) => {
  return Math.round(x);
}

round2(0.50);
// 1

var floor = (x) => {
  return Math.floor(x);
}

floor(2.50);
// 2

var ceil = (x) => {
  return Math.ceil(x);
}

ceil(3.27);
// 4

var max = (a, b, c, d, e) => {
  return Math.max (a, b, c, d, e);
}

max(1, 2, 3, 4, 5);
// 5

var min = (a, b, c, d, e) => {
  return Math.min (a, b, c, d, e);
}

min(1, 2, 3, 4, 5);
//1


let random = (x) => {
  return Math.random(x);
}

random();
// 0.5033236922817732