const http = require('http');
const fs = require('fs');
// const http = require('http2');   // ssl인증서 적용을 해야함. 배포할때 http2로 변경하여 배포함.

const server = http.createServer((req, res) => {
    console.log('incoming....');
    const url = req.url;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./html/index.html').pipe(res);
    } else if (url === '/courses') {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./html/courses.html').pipe(res);
    } else {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./html/error.html').pipe(res);
    }
    // pipe를 사용할 때에는 res.end()를 호출할 필요가 없음.
    // -> stream이 event-driven형태이기 때문에 최종적으로 end()이벤트를 호출하기 때문
});
server.listen(8080);
