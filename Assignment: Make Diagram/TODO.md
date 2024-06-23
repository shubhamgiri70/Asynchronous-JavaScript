Create the execution context diagram that includes call stack, event loop, callback queue. Also write the output of the each code snippet.
```js
1.

function sayHello() {
  console.log('Hey You Called Me');
}
setTimeout(sayHello, 1000);

console.log('Hey You!');
2.

function sayHello() {
  console.log('Hey You Called Me');
}

setTimeout(sayHello, 0);

console.log('Hey You!');
3.

function main() {
  console.log('A');
  setTimeout(function display() {
    console.log('B');
  }, 0);
  console.log('C');
}
main();
4.

function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
function main() {
  console.log('A');
  setTimeout(function exec() {
    console.log('B');
  }, 0);
  runWhileLoopForNSeconds(3);
  console.log('C');
}
// output

Look at the output of the code below to understand how code is executing
function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
function main() {
  var current = Date.now();
  console.log('A', Date.now() - current);
  setTimeout(function exec() {
    console.log('B', Date.now() - current);
  }, 1000);
  runWhileLoopForNSeconds(3);
  console.log('C', Date.now() - current);
}
main()