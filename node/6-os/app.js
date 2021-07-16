const os = require('os');

console.log(os.EOL === '\n');    // End Of the Line : OS마다 달라지는 줄바꿈 시 사용하는 문자
console.log(os.EOL === '\n\r');

console.log('totalmem=' + os.totalmem());
console.log('freemem=' + os.freemem());
console.log('type=' + os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log('homedir=' + os.homedir());
console.log('hostname=' + os.hostname());