const fs = require('fs');   // file System

// API는 보통 3가지 방식으로 제공됨
// rename(..., callback(error, data));
//  - 원하는 작업이 실행된 후 콜백함수가 실행되는 형식
// try { renameSync(...); } catch(e) { }
//  - block으로 실행되며 try-catch를 이용하여 에러처리
// promises.rename().then().catch(0);
//  - promise 방식으로 제공

try {
    // node가 현재 실행중인 폴더의 경로를 기준으로 인식하기 때문에 10-file 폴더로 들어온 후 실행해야 함!
    fs.renameSync('./text.txt', './newText.txt');
} catch (e) {
    console.error(e);
}

// 아래 두가지는 비동기적으로 실행되기 때문에 어떤 함수가 먼저 호출될 지 모름!!!!!
fs.rename('./newText.txt', './text.txt', (error) => {
   console.error(error);
});

console.log('hello');

fs.promises
    .rename('./text.txt', './newText.txt')
    .then(() => console.log('Done!'))
    .catch(console.error);