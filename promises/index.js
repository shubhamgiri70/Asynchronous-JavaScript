// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a == 2) {
//     resolve("success");
//   } else {
//     reject("failed");
//   }
// });

// p.then((message) => {
//   console.log("this is in the then " + message);
// }).catch((message) => {
//   console.log("this is in the catch " + message);
// });

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task 1");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "sunny", email: "sunny@example.com" });
  }, 1000);
});

promiseThree.then((data) => {
  console.log(data);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Shubham", password: "1234" });
    } else {
      reject("Error: something went wrong!");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then(() => {
    
  });
