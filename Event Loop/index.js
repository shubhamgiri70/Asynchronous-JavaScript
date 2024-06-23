// 1.
console.log("First");

setTimeout(() => {
  console.log("Second");
}, 1000);

console.log("Last");

// 2.
console.log("First");

setTimeout(() => {
  console.log("Second");
}, 0);

setTimeout(() => {
  console.log("Third");
}, 0);

console.log("Fourth");

// 3.

function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
function main() {
  console.log("A");
  setTimeout(function exec() {
    console.log("B");
  }, 0);
  runWhileLoopForNSeconds(5);
  console.log("C");
}

main();

console.log("First");
function secondCall() {
  console.log("Second");
}
setTimeout(secondCall, 2000);
setTimeout(function () {
  console.log("Third");
}, 0);
console.log("Third");
