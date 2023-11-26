const os = require("os");

const user = os.userInfo();
console.log(user);

// Method returns the system uptime in secs a

console.log(`The System uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
