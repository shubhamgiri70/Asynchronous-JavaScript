Create the execution context diagram of the following code. Also write the output of the code below. Keep in mind to have call stack, web browser API and event loop in the diagram. After creating the execution context diagram add the image to the img folder.

```js
console.log("First");
setTimeout(() => console.log("Second"), 0);
console.log("Third");
```

```js
console.log("First");
function secondCall() {
  console.log("Second");
}
setTimeout(secondCall, 2000); // execute this code after 1000 ms
setTimeout(function () {
  console.log("Third");
}, 0); // execute this code after 1000 ms
console.log("Third");
```

```js
console.log("First");
function secondCall() {
  console.log("Second");
}
setTimeout(secondCall, 1000);
setTimeout(() => console.log("Third"), 0);
console.log("Fourth");
```

```js
console.log("First");
function secondCall() {
  console.log("Second");
}
setTimeout(secondCall, 1000); // execute this code after 1000 ms
setTimeout(() => console.log("Third"), 0);
console.log("Fourth");
```

What will be the output of the code below and why? Also write the timing of the output starting with 0 ms.

```js
function runWhileLoopForNSeconds(sec) {
let start = Date.now(),
now = start;
while (now - start < sec \* 1000) {
now = Date.now();
}
}
console.log('First');
setTimeout(function exec() {
console.log('Second');
}, 0);
runWhileLoopForNSeconds(3);
console.log('Third');

//0ms First
//3000ms Third
//3000ms Second


```

6. Convert the synchronous code given below into asynchronous. If you execute this code it will print one, two and three. Change the code in such a way that it should print one, three and two. You are not allowed to move the code up and down.

```js
console.log("one");
setTimeout(() => {
  console.log("two");
}, 0);
console.log("three");
```

Convert the synchronous code given below into asynchronous. If you execute this code it will print one, two and three. Change the code in such a way that it should print one, three and two. You are not allowed to move the code up and down.

```js
console.log("one");
setTimeout(() => {
  console.log("two");
}, 0);
console.log("three");
```

Write a function named asyncForEach that is similar to forEach. But asyncForEach is asynchronous in nature rather than synchronous.

```js
function asyncForEach(array, callback) {
  array.forEach((item, index) => {
    setTimeout(() => {
      callback(item, index, array);
    }, 0);
  });
}

console.log("one");
asyncForEach([1, 2, 3], (num) => console.log(num));
console.log("three");

// one
// three
// 1
// 2
// 3
```

Convert the following function into asynchronous. The output of the function will be
Convert the code below in such way that the output should be the one below

```js
funciton asyncForEach(){
console.log('one');
setTimeout(()=>{console.log('1','2','3')},0);
console.log('three');
}
console.log('First Call');
[1, 2, 3, 4, 5].f0rEach((num) => console.log(num));
console.log('Last Call');
```
