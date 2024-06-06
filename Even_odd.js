//Identify Number even or odd.

let n = 100;
for (let i = 0; i <= n; i++) {
  if (i == 0) {
    console.log(`${i} is neither even nor odd`);
  } else if (i % 2 == 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

// identify even number using function.

let e;
function even(e) {
  if (e % 2 == 0) {
    console.log(`${e} is even`);
  }
}
even(10);

// identify odd number using function.

let o;
let odd = (o) => {
  if (o % 2 != 0) {
    console.log(`${o} is odd`);
  }
};
odd(11);
