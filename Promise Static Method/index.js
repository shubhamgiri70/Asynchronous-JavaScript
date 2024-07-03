const usernames = [
  "gatify",
  "gaearon",
  "AArnott",
  "subtleGradient",
  "piranha",
  "sophiebeats",
];

// const usernamePromises = usernames
//   .map((user) =>
//     fetch(`https://api.github.com/users/${user}`).then((res) => res.json())
//   )
//   .then((users) => console.log(users));

// usernames.forEach((user) => {
//   fetch(`https://api.github.com/users/${user}`)
//     .then((res) => res.json())
//     .then(console.log);
// });

const five = Promise.resolve(5);
const hello = Promise.resolve("Hello");
const superHuman = Promise.resolve("superHuman");
const error = Promise.reject("Error");

let all = Promise.allSettled([five, hello, superHuman, error])
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
