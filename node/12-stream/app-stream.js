const fs = require('fs');

const data = [];

// on: 이벤트가 발생할 때 마다 실행됨
// once: 최초 이벤트 발생시에만 실행됨
fs.createReadStream('./text.txt', {
    // highWaterMark: 8,    // 한번에 얼마만큼의 데이터를 읽어올 것인지(단위: byte), 기본값은 64(kbtye)
    encoding: 'utf-8'       // encoding을 utf-8로 지정해주면 데이터가 string으로 넘어옴
}).on('data', (chunk) => {
    data.push(chunk);
}).on('error', (error) => {
    console.error(error);
}).on('end', () => {
    console.log(data.join(''));
});
