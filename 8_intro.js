const os = require("os");

// info about current user

const user = os.userInfo();
console.log(user);

// system uptime in seconds
console.log(`system uptime is ${os.uptime} seconds`);
console.log(`system uptime is ${os.uptime / 60} minutes`);
console.log(`system uptime is ${os.uptime / 60 / 60} hours`);
console.log(`system uptime is ${os.uptime / 60 / 60 / 24} days`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
