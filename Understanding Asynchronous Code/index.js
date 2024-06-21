// function incrementEverySecond() {
//   let count = 0;
//   console.log("Count is: " + count);

//   const intervalId = setInterval(() => {
//     count++;
//     console.log("Count is: " + count);

//     if (count >= 5) {
//       clearInterval(intervalId);
//     }
//   }, 1000);
// }

// incrementEverySecond();

function callItEveryXSecForYSce(cb, interval, duration) {
  // Set an interval to execute the callback function every 'interval' milliseconds
  const intervalId = setInterval(cb, interval);

  // Set a timeout to clear the interval after 'duration' milliseconds
  setTimeout(() => {
    clearInterval(intervalId);
  }, duration);
}

function sayHi() {
  console.log("Hey");
}

// Example usage: call sayHi every 100 milliseconds for 1000 milliseconds
callItEveryXSecForYSce(sayHi, 100, 1000);
