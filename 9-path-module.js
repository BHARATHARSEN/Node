const { log } = require("console");
const path = require("path");
const { clearScreenDown } = require("readline");

console.log(path.sep);
const filePath = path.join("./content", "subfolder", "test.txt");

console.log(filePath);

const base = path.basename(filePath);
console.log(base);

setInterval(() => {
  console.log(path);
}, 3000);

const direct = process.cwd();

const absolute = path.resolve(direct, "content", "subfolder", "test.txt");

console.log(absolute);
