const { readFileSync, writeFileSync } = require("fs");
console.log("start");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Hey I'm making it interesting ${first}, ${second}`,
  {flag :'a'}
)

console.log('done with thhis task');
console.log('starting with the next one');