Create four promises that resolve after 1, 2, 3 and 4 seconds with a random value. Using Promise.all log the value of each promise that it resolved with.

```js
let times = [1, 2, 3, 4];

let timesPromises = times.map((second) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(Math.random());
    }, second * 1000);
  });
});

Promise.all(timesPromises).then(console.log);
```

Create a list of 5 Github usernames in an array and using Promise.all get access to the data of each user from GitHub API. Log the number of followers of each user.

```js
const usernames = [
  "gatify",
  "gaearon",
  "AArnott",
  "subtleGradient",
  "piranha",
  "sophiebeats",
];

let userPromises = usernames.map((user) => {
  return fetch(`https://api.github.com/users/${user}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch user: ${user}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
});

Promise.all(userPromises).then((users) => {
  users.forEach((user) => {
    if (user) {
      console.log(`${user.login} has ${user.followers} followers`);
    } else {
      console.log("A user data fetch failed.");
    }
  });
});
```

Use Promise.race to see which API resolves faster from the given list of URLs. Log the object you get from the promise that is resolved faster.

https://random.dog/woof.json
https://aws.random.cat/meow

```js
let promiseOne = fetch(`https://random.dog/woof.json`).then((res) =>
  res.json()
);

let promiseTwo = fetch(`https://aws.random.cat/meow`).then((res) => res.json());

Promise.race([promiseOne, promiseTwo]).then(console.log);
```

Use Promise.allSettled to log the value of each promise from the given list of promises. And also check if Promise.all works with one, two and three or not

```js
const one = new Promise((res, rej) => {
  setTimeout(() => {
    res("Arya");
  }, 1000);
});

const two = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Woops!");
  }, 2000);
});

const three = new Promise((res, rej) => {
  setTimeout(() => {
    res("John");
  }, 3000);
});

Promise.allSettled([one, two, three]).then(console.log);
Promise.all([one, two, three]).then(console.log);
```

What will be the output of the following code snippet? How much time will it take for the promise to resolve?
Promise.all([
new Promise((resolve, reject) => {
setTimeout(() => resolve('Arya'), 1000);
}),
'Sam',
{ name: 'John' },
]).then(console.log);
['Arya', 'Sam', {…}];
