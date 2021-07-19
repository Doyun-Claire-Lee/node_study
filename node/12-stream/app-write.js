const fs = require('fs');

const writeStream = fs.createWriteStream('./text3.txt')
writeStream.on('finish', () => console.log('Finished!!'));

writeStream.write('Hello!');
writeStream.write('World!');
writeStream.end();
