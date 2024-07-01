Create a promise. Have it resolve with a value of Promise Resolved! in resolve after a delay of 1000ms, using setTimeout. Print the contents of the promise after it has been resolved by passing console.log to .then

```js
let promise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise Resolved!");
  }, 1000);
});

promise.then((message) => {
  console.log(message);
});
```

Create another promise. Now have it reject with a value of Rejected Promise! without using setTimeout. Print the contents of the promise after it has been rejected by passing console.log to .catch

```js
let promise = new Promise((res, rej) => {
  rej("Rejected Promise!");
});

promise.catch((message) => {
  console.log(message);
});
```

Create another promise. Now have it reject with a value of Rejected Promise! without using setTimeout. Print the contents of the promise after it has been rejected by passing console.log to .catch and also use .finally to log message Promise Settled!.

```js
let promise = new Promise((res, rej) => {
  rej("Rejeccted Peomise!");
});

promise
  .catch((message) => {
    console.log(message);
  })
  .finally(() => {
    console.log("Promise Settled!");
  });
```

What will be the output of the code below.

```js
console.log("A");

// Asynchronous code finises in 0 seconds (Callback Queue)
setTimeout(() => console.log("B"), 0); //

// A promise that resolves right away (Microtask Queue)
Promise.resolve().then(() => console.log("C"));

console.log("D");
```

// A D C B

Write a function named wait that accepts time in ms returns a promise. The promise gets resolved after given time.

```js
function wait(time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`Promise Resolved!`);
    }, time);
  });
}
```

Do the following:
Create a new promise
Resolve with 21
Use .then and return adding 10 to the value you will get as parameter
Use .then and return adding 100 to the value you will get as parameter
Use .then and check if the value you get is greater than 100 throw new error with any message
Catch the error using .catch

```js
let promise = new Promise((res, rej) => {
  res(21);
});

promise
  .then((value) => {
    return value + 10;
  })
  .then((value) => {
    return value + 100;
  })
  .then((value) => {
    if (value > 100) {
      throw new Error("something went wrong");
    }
  })
  .catch(console.log);
```

Do the following:
Create a new promise
Resolve the promise with ['A']
Use .then and concat B into the parameter and return
Use .then and return an object like {0: 'A', 1: 'B'}
Use .then and log the value

```js
let promise = new Promise((res, rej) => {
  res(["A"]);
})
  .then((value) => {
    return value.concat("B");
  })
  .then((value) => {
    return value.reduce((acc, cv, i) => {
      acc[i] = cv;
      return acc;
    }, {});
  })
  .then(console.log);
```

Do the following:
Create a new promise named first and resolve it with 1
Use .then on first and return 2 also check the value you get access to by logging
Chain .then on above and return 3 also check the value you get access to by logging
Chain .then on above and return 4 also check the value you get access to by logging

```js
let first = new Promise((res, rej) => {
  res(1);
});

first
  .then((value) => {
    console.log(value);
    return 2;
  })
  .then((value) => {
    console.log(value);
    return 3;
  })
  .then((value) => {
    console.log(value);
    return 4;
  });
```

Do the following:
Create a new promise named first and resolve it with 1
Use .then on first and return 2 also check the value you get access to by logging
Use .then on first and return 3 also check the value you get access to by logging
Use .then on first and return 4 also check the value you get access to by logging

```js
let first = new Promise((res, rej) => {
  res(1);
});

first.then((value) => {
  console.log(value);
  return 2;
});

first.then((value) => {
  console.log(value);
  return 3;
});

first.then((value) => {
  console.log(value);
  return 4;
});
```

Try to understand the difference between the problem 8 and 9. Write your observation.

as we are using .then on promise named first in question 8 we are repeating .then and getting the parameter from their previous function while in question 9 we are taking paramater as 1 each time because we use .then seperately ;

Do the following
Create a promise and resolve it with John
Use .then and return another promise that resolves with Arya
Use .then log the value you get access to and return another promise that resolves after 2000ms with value Bran
Use .then to log the value

```js
let promise = new Promise((res, rej) => {
  res(`John`);
});

promise
  .then((value) => {
    return Promise.resolve(`Arya`);
  })
  .then((value) => {
    console.log(value);
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(`Bran`);
      }, 2000);
    });
  })
  .then(console.log);
```
