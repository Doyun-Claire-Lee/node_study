import express from 'express'
const app = express();

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

app.get('/', (req, res, next) => {
    console.log('first');
    // next();
    next('route');      //현재 메소드에 등록된 다른 핸들러를 무시하고 다음 메소드로 넘어감(?)
}, (req, res, next) => {
    console.log('first2');
});

app.get('/', (req, res, next) => {
    console.log('second');
    next(new Error('Error!!'));
});

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500).send('Sorry, try later!');
});

app.listen(8080);
