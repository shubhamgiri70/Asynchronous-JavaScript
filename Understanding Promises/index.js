// let recipt = new Promise(resolver);

// function resolver(resolve, reject) {
//   //   setTimeout(() => {
//   //     resolve("🍔");
//   //   }, 5000);
//   setTimeout(() => {
//     reject("rejected");
//   }, 5000);
// }

// function wait(cb) {
//   setTimeout(cb, 5000);
//   setTimeout(cb, 5000);
//   setTimeout(cb, 5000);
// }

// wait(() => {
//   console.log("Hello There!");
// });

// function waitPr() {
//   return new Promise((res, rej) => {
//     setTimeout(res, 5000);
//   });
// }

// let time = waitPr().then(() => {
//   console.log("Hello Promise!");
// });

// let initial = new Promise((res, rej) => {});

// let fulfilled = new Promise((res, rej) => {
//   res(1000);
// });

// let rejected = new Promise((res, rej) => {
//   rej("something went wrong");
// });

let five = new Promise((res, rej) => {
  res(5);
});

five
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });
