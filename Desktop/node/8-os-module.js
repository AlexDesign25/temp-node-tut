const os = require('os');

// info about current user

const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds
console.log(`The System UpTime is ${os.uptime()} seconds`);

const currentOS = {
   name: os.type(),
   relase: os.release(),
   totalMem: os.totalmem(),
   freeMem: os.freemem()
}

console.log(currentOS)