const fs = require('fs').promises;

// read file
fs.readFile('./newText.txt', 'utf-8')   // encoding을 지정해 주지 않으면 Buffer 형태로 읽어오게 됨
    .then((data) => console.log(data))
    .catch(console.error);

// write file
// writeFile의 반환값 Promise가 void 타입이기 때문에 then()은 하지 않아도 되지만 catch는 해주어야 함!
fs.writeFile('./file.txt', 'Hello, Dream coders! ')
    .catch(console.error);
fs.appendFile('./file.txt', 'Yo, Dream coders! ')
    .catch(console.error);

// copy file
// 비동기적으로 처리되기 때문에 위의 코드가 실행되기 전의 빈 파일이 복사될 수 있음.
// 동기적으로 처리되길 원할 경우 appendFile의 .then() 안에 넣어서 처리하기!
fs.copyFile('./file.txt', './file2.txt')
    .catch(console.error);

// folder
fs.mkdir('sub-folder')
    .catch(console.error);
fs.readdir('./')
    .then(console.log)
    .catch(console.error);
