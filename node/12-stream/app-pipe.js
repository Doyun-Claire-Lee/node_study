const fs = require('fs');
const zlib = require('zlib');   // node에서 제공하는 압축 모듈

const readStream = fs.createReadStream('./text.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./text4.zip');
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on('finish', () => console.log('DONE!!'));

