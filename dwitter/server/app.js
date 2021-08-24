/*
Dwitter Project

1. 기능
    - 로그인/로그아웃
    - 트윗 생성/수정/삭제
    - 유저별 트윗 조회
 */

import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from "helmet";

import tweetsRouter from './router/tweets.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

app.use('/tweets', tweetsRouter);

app.use((req, res, next) => {
    res.sendStatus(404);
});
app.use((err, req, res, next) => {
    console.error(err);
    res.sendStatus(500);
});
app.listen(8080);

