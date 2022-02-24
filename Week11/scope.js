let x = "chair";

function mitch() {
  let y = "table";
  function scoobyDoo() {
    let scooby = "doo";
    function end() {
      console.log(x, y, scooby);
    }
    end();
  }
  scoobyDoo();
}
mitch();

globalScope = {
  x: "chair",
  outer: null,
};

mitchScope = {
  y: "table",
  outer: "globalScope",
};

const scoobyDoo = (a) => (b) => a + b + 0;
() => a - b;

console.log(scoobyDoo(5)(5));

// first recursion
const countUp = (num) => {
  if (num > 99) {
    return;
  }
  console.log(num);
  num++;
  countUp(num);
};

// CodeWars
function replicate(times, number) {
  return times > 0 ? [number, ...replicate(times - 1, number)] : [];
}
console.log(replicate(3, 5));
