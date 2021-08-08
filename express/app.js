import express from 'express'
const app = express();

// all vs use
app.all('/all',(req, res, next) => {
    // .../all 로 호출했을때만 반응함. .../all/id 등은 반응하지 않음.
    // path를 '/all/*'로 설정해주면 동작하긴 함
    console.log('all');
    res.send('all');
});
app.use('/use', (req, res, next) => {
    // .../use/* 로 호출하는 모든 URL에 대해 반응함
    console.log('use');
    res.send('use');
});

app.get('/test/:id', (req, res, next) => {
    // console.log(req.path);
    // console.log(req.headers);
    console.log(req.params);    // object 반환 { id: 'claire' }
    console.log(req.query);     // object 반환

    // res.send('Hi!');
    // res.json({name: 'claire'});
    // res.sendStatus(400);
    res.setHeader('key', 'value');
    res.sendStatus(201).send('Created!');
});

app.get('/next', (req, res, next) => {
    console.log('first');
    next();
    // next('route');      //현재 메소드에 등록된 다른 핸들러를 무시하고 다음 메소드로 넘어감(?)
}, (req, res, next) => {
    console.log('first2');
    next();
});

app.get('/next', (req, res, next) => {
    console.log('second');
    next(new Error('Error!!'));
});

app.use((req, res, next) => {
    // 위의 모든 미들웨어를 거치고 마지막으로 들어오게 되는 미들웨어
    // 보통 등록되지 않은 URL을 처리해줌?
    res.sendStatus(404).send("Not available!");
})

app.use((err, req, res, next) => {
    console.error(err);
    // 컴파일 에러..? 왜 나는지 모르겠음.
    // [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client 에러 발생. 왜 나는지 모르게씀..
    // ㅠㅠ...
    res.sendStatus(500).send('Try later!!');
});

app.listen(8080);
